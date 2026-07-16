export interface PublishIssue {
  level: 'error' | 'warning';
  message: string;
  path?: string;
}

const PLACEHOLDER_PATTERN = /(your headline here|enter some content here|new (text|image|button|social|map|embed|blog|testimonial)|example\.com)/i;
const SAFE_URL_PATTERN = /^(https?:\/\/|mailto:|tel:|\/|#)/i;

export function normalizePageSlug(slug: unknown): string | null {
  if (typeof slug !== 'string') return null;
  const value = slug.trim().replace(/^\/+|\/+$/g, '');
  if (value === '' || value === 'index') return 'index';
  return /^[a-z0-9]+(?:[a-z0-9-]*[a-z0-9])?(?:\/[a-z0-9]+(?:[a-z0-9-]*[a-z0-9])?)*$/i.test(value)
    ? value.toLowerCase()
    : null;
}

export function validateCanvas(canvas: unknown): PublishIssue[] {
  const issues: PublishIssue[] = [];
  if (!Array.isArray(canvas)) {
    return [{ level: 'error', message: 'Page content must be a list of sections.' }];
  }
  if (canvas.length === 0) {
    return [{ level: 'warning', message: 'This page has no sections and will publish as a blank page.' }];
  }
  if (canvas.length > 120) {
    issues.push({ level: 'error', message: 'A page can contain at most 120 sections.' });
  }

  const ids = new Set<string>();
  canvas.forEach((section: any, index) => {
    const path = `sections[${index}]`;
    if (!section || typeof section !== 'object') {
      issues.push({ level: 'error', message: 'Each section must be an object.', path });
      return;
    }
    if (typeof section.id !== 'string' || section.id.trim() === '') {
      issues.push({ level: 'error', message: 'Each section needs an ID.', path });
    } else if (ids.has(section.id)) {
      issues.push({ level: 'error', message: 'Section IDs must be unique.', path });
    } else {
      ids.add(section.id);
    }
    if (typeof section.type !== 'string' || section.type.trim() === '') {
      issues.push({ level: 'error', message: 'Each section needs a supported type.', path });
    }

    for (const field of ['gridX', 'gridY', 'gridColumnSpan', 'gridRowSpan']) {
      if (section[field] !== undefined && (!Number.isInteger(section[field]) || section[field] < 1 || section[field] > 100)) {
        issues.push({ level: 'error', message: `${field} must be a whole number between 1 and 100.`, path });
      }
    }
    if (section.gridX && section.gridColumnSpan && section.gridX + section.gridColumnSpan - 1 > 10) {
      issues.push({ level: 'error', message: 'A section extends beyond the 10-column canvas.', path });
    }

    const text = [section.title, section.content, section.ctaText, section.props?.title, section.props?.subtitle]
      .filter((value) => typeof value === 'string')
      .join(' ');
    if (PLACEHOLDER_PATTERN.test(text)) {
      issues.push({ level: 'warning', message: 'Replace placeholder copy before publishing.', path });
    }

    for (const value of [section.url, section.image, ...(Array.isArray(section.images) ? section.images : [])]) {
      if (typeof value === 'string' && value.trim() && !SAFE_URL_PATTERN.test(value.trim())) {
        issues.push({ level: 'error', message: 'Links and image URLs must use https, http, mailto, tel, a relative path, or an anchor.', path });
      }
    }
    if (section.type === 'image' && !section.image && !section.images?.length) {
      issues.push({ level: 'warning', message: 'This image section has no image selected.', path });
    }
  });
  return issues;
}

export function validateSitePages(pages: unknown): PublishIssue[] {
  if (!Array.isArray(pages) || pages.length === 0) {
    return [{ level: 'error', message: 'A site needs at least one page.' }];
  }
  const issues: PublishIssue[] = [];
  const slugs = new Set<string>();
  pages.forEach((page: any, index) => {
    const pagePath = `pages[${index}]`;
    const slug = normalizePageSlug(page?.slug);
    if (!slug) {
      issues.push({ level: 'error', message: 'Each page needs a valid URL slug.', path: pagePath });
    } else if (slugs.has(slug)) {
      issues.push({ level: 'error', message: 'Page URL slugs must be unique.', path: pagePath });
    } else {
      slugs.add(slug);
    }
    validateCanvas(page?.sections).forEach((issue) => issues.push({ ...issue, path: `${pagePath}.${issue.path || 'sections'}` }));
  });
  if (!slugs.has('index')) {
    issues.push({ level: 'error', message: 'Every site needs a Home page with the / URL.' });
  }
  return issues;
}
