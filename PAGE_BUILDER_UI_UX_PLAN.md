# Industry-Standard Page Builder: Detailed UI/UX & Site Import Plan

**Objective:** Transform bento grid into a Figma/Webflow-competitive builder with Next.js site import capability.

**Unique Position:** "Figma for Next.js Sites" — not HTML-dumping like Webflow, but real component export with TypeScript.

---

## PHASE 1: CANVAS-FIRST UI TRANSFORMATION (Weeks 1–2)

### Current vs. Target Layout

**Current:**
```
┌─ Floating Panel (right) ─┐
│ Content | Style          │
└──────────────────────────┘
                           ┌─ Toolbar (top)
                           │
                    [Canvas + Blocks]
```

**Target (Industry Standard):**
```
┌──────────────────────────────────────────────────────────────────────────┐
│ Logo │ Page: Home ▼ │ Desktop/Tab/Mobile │ Publish │ Share │ Settings  │
├──────────────────┬────────────────────────────────────────┬──────────────┤
│ Layers Panel     │                                        │ Properties   │
│ (Left: Sticky)   │         CANVAS (Scrollable, Full)      │ (Right: Sticky)
│                  │                                        │              │
│ ├─ Page 1        │ ┌──────────────────────────────────┐   │ CONTENT TAB  │
│ ├─ Header        │ │ [Block1]                         │   │ ├─ Text      │
│ ├─ Hero          │ │                                  │   │ ├─ Image     │
│ ├─ Features      │ │ [Block2]  [Hover Toolbar]        │   │ ├─ Link      │
│ │ ├─ Card1       │ │ Add │Dup │Del │Move             │   │ └─ List      │
│ │ ├─ Card2       │ │                                  │   │              │
│ │ └─ Card3       │ │ [Block3]  [Selected: Blue Border]│   │ STYLE TAB    │
│ ├─ CTA           │ │                                  │   │ ├─ Colors    │
│ └─ Footer        │ │ [Block4]                         │   │ ├─ Typography│
│                  │ │                                  │   │ ├─ Spacing   │
│ Components       │ │                                  │   │ ├─ Borders   │
│ Design System    │ │                                  │   │ └─ Effects   │
│                  │ └──────────────────────────────────┘   │              │
└──────────────────┴────────────────────────────────────────┴──────────────┘
```

### 1.1 Layout Components

**New Components to Create:**

#### `components/Editor/EditorLayout.tsx`
```typescript
interface EditorLayoutProps {
  siteId: string;
  pageId: string;
  children?: React.ReactNode;
}

export function EditorLayout({ siteId, pageId }: EditorLayoutProps) {
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <TopNavbar siteId={siteId} pageId={pageId} viewport={viewport} />
      <div className="flex flex-1 overflow-hidden gap-0">
        <LayerTree pageId={pageId} selectedBlockId={selectedBlockId} />
        <Canvas 
          pageId={pageId} 
          selectedBlockId={selectedBlockId}
          onSelectBlock={setSelectedBlockId}
          viewport={viewport}
        />
        <PropertiesPanel 
          blockId={selectedBlockId}
          viewport={viewport}
        />
      </div>
    </div>
  );
}
```

#### `components/Editor/TopNavbar.tsx`
```typescript
export function TopNavbar({ siteId, pageId, viewport }) {
  return (
    <nav className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="font-bold text-lg">Michaelfred Builder</h1>
        <PageSelector siteId={siteId} />
      </div>
      
      <div className="flex items-center gap-4">
        <ViewportToggle value={viewport} onChange={setViewport} />
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">
          Publish
        </button>
      </div>
    </nav>
  );
}
```

#### `components/Editor/LayerTree.tsx`
```typescript
export function LayerTree({ pageId, selectedBlockId, onSelectBlock }) {
  const { pages } = useBentoContext();
  const page = pages.find(p => p.id === pageId);
  
  return (
    <aside className="w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-bold text-sm text-gray-700">Layers</h2>
      </div>
      
      <div className="p-2">
        {page?.blocks.map(block => (
          <LayerItem
            key={block.id}
            block={block}
            isSelected={block.id === selectedBlockId}
            onSelect={() => onSelectBlock(block.id)}
            level={0}
          />
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-200 text-sm">
        <div className="font-semibold text-gray-700 mb-2">Components</div>
        <ComponentLibraryPreview />
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <div className="font-semibold text-gray-700 mb-2">Design System</div>
        <DesignTokenQuickAccess />
      </div>
    </aside>
  );
}

function LayerItem({ block, isSelected, onSelect, level }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div>
      <div
        onClick={onSelect}
        className={`px-2 py-1.5 rounded cursor-pointer flex items-center gap-2 ${
          isSelected 
            ? 'bg-indigo-100 border border-indigo-300' 
            : 'hover:bg-gray-100'
        }`}
        style={{ paddingLeft: `${level * 16 + 8}px` }}
      >
        <ChevronRight 
          size={16}
          className={`transition ${isExpanded ? 'rotate-90' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsExpanded(!isExpanded);
          }}
        />
        <span className="text-sm flex-1">{block.title || block.type}</span>
        <Eye size={14} className="text-gray-400 hover:text-gray-600" />
        <Lock size={14} className="text-gray-400 hover:text-gray-600" />
      </div>
      
      {isExpanded && block.children?.map(child => (
        <LayerItem
          key={child.id}
          block={child}
          isSelected={isSelected}
          onSelect={onSelect}
          level={level + 1}
        />
      ))}
    </div>
  );
}
```

#### `components/Editor/Canvas.tsx` (Refactored)
```typescript
export function Canvas({ pageId, selectedBlockId, onSelectBlock, viewport }) {
  const { pages, updateWidget } = useBentoContext();
  const page = pages.find(p => p.id === pageId);
  const [draggedBlock, setDraggedBlock] = useState<string | null>(null);
  
  const getCanvasWidth = () => {
    switch(viewport) {
      case 'desktop': return 'max-w-none'; // Full width
      case 'tablet': return 'max-w-4xl'; // ~1024px
      case 'mobile': return 'max-w-sm'; // ~384px
      default: return 'max-w-none';
    }
  };
  
  return (
    <main className={`flex-1 overflow-auto bg-gray-100 p-8 flex flex-col items-center`}>
      <div className={`w-full ${getCanvasWidth()} bg-white rounded-lg shadow-sm border border-gray-200`}>
        {page?.blocks.map(block => (
          <CanvasBlock
            key={block.id}
            block={block}
            isSelected={block.id === selectedBlockId}
            onSelect={() => onSelectBlock(block.id)}
            onUpdate={(data) => updateWidget(block.id, data)}
            viewport={viewport}
          />
        ))}
      </div>
    </main>
  );
}

function CanvasBlock({ block, isSelected, onSelect, onUpdate, viewport }) {
  const [showToolbar, setShowToolbar] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setShowToolbar(true)}
      onMouseLeave={() => setShowToolbar(false)}
      onClick={onSelect}
      className={`relative transition-all ${
        isSelected 
          ? 'ring-2 ring-indigo-500 ring-inset' 
          : 'hover:ring-1 hover:ring-gray-300 hover:ring-inset'
      }`}
    >
      {showToolbar && <CanvasToolbar block={block} />}
      
      <BlockRenderer 
        block={block} 
        isEditable={true}
        isSelected={isSelected}
      />
    </div>
  );
}
```

#### `components/Editor/CanvasToolbar.tsx`
```typescript
export function CanvasToolbar({ block }) {
  const { removeWidget, duplicateWidget } = useBentoContext();
  
  return (
    <div className="absolute -top-10 left-0 flex gap-1 bg-gray-900 text-white px-2 py-1.5 rounded-lg shadow-lg">
      <button 
        title="Duplicate (D)" 
        onClick={(e) => {
          e.stopPropagation();
          duplicateWidget(block.id);
        }}
        className="p-1 hover:bg-gray-800 rounded"
      >
        <Copy size={16} />
      </button>
      <button 
        title="Delete (Backspace)" 
        onClick={(e) => {
          e.stopPropagation();
          removeWidget(block.id);
        }}
        className="p-1 hover:bg-gray-800 rounded"
      >
        <Trash2 size={16} />
      </button>
      <div className="w-px bg-gray-700"></div>
      <button 
        title="Add below" 
        onClick={(e) => {
          e.stopPropagation();
          // Show add menu
        }}
        className="p-1 hover:bg-gray-800 rounded"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
```

#### `components/Editor/PropertiesPanel.tsx`
```typescript
export function PropertiesPanel({ blockId, viewport }) {
  const { pages, updateWidget } = useBentoContext();
  const block = pages.flatMap(p => p.blocks).find(b => b.id === blockId);
  const [activeTab, setActiveTab] = useState<'content' | 'style' | 'responsive' | 'advanced'>('content');
  
  if (!block) {
    return (
      <aside className="w-72 bg-white border-l border-gray-200 p-6 flex items-center justify-center">
        <p className="text-gray-500 text-sm">Select a block to edit</p>
      </aside>
    );
  }
  
  return (
    <aside className="w-72 bg-white border-l border-gray-200 overflow-y-auto flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-bold text-sm text-gray-900">{block.title || block.type}</h2>
        <p className="text-xs text-gray-500 mt-1">Block Type: {block.type}</p>
      </div>
      
      <div className="flex border-b border-gray-200">
        {(['content', 'style', 'responsive', 'advanced'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-2 text-xs font-semibold border-b-2 ${
              activeTab === tab
                ? 'text-indigo-600 border-indigo-600'
                : 'text-gray-600 border-transparent hover:text-gray-900'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="flex-1 p-4 overflow-y-auto">
        {activeTab === 'content' && <ContentPanel block={block} onUpdate={updateWidget} />}
        {activeTab === 'style' && <StylePanel block={block} onUpdate={updateWidget} />}
        {activeTab === 'responsive' && <ResponsivePanel block={block} viewport={viewport} onUpdate={updateWidget} />}
        {activeTab === 'advanced' && <AdvancedPanel block={block} onUpdate={updateWidget} />}
      </div>
    </aside>
  );
}
```

### 1.2 Data Structure Updates

**Update `src/types/bento.ts`:**

```typescript
export interface Page {
  id: string;
  name: string;
  slug: string;
  blocks: WidgetData[];
  seo?: PageSEO;
  theme?: Partial<ThemeConfig>;
}

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface WidgetData {
  // ... existing fields
  children?: WidgetData[]; // For hierarchical nesting (sections with children)
  responsive?: {
    desktop?: PartialWidgetData;
    tablet?: PartialWidgetData;
    mobile?: PartialWidgetData;
  };
  interactions?: BlockInteraction[];
  componentId?: string; // Reference to reusable component
  componentVariant?: string; // Variant of component
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
    success: string;
    error: string;
    warning: string;
  };
  typography: {
    headingFont: string;
    bodyFont: string;
    lineHeights: { tight: number; normal: number; relaxed: number };
  };
  spacing: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string>;
}

export interface BlockInteraction {
  id: string;
  trigger: 'hover' | 'click' | 'scroll' | 'load';
  action: 'animate' | 'navigate' | 'modal' | 'custom';
  animation?: {
    type: 'fade' | 'slide' | 'scale' | 'rotate';
    duration: number;
    easing: string;
  };
}

export interface ReusableComponent {
  id: string;
  name: string;
  baseBlock: WidgetData;
  variants: {
    id: string;
    name: string;
    overrides: Partial<WidgetData>;
  }[];
  slots?: string[]; // Editable areas
}
```

### 1.3 Update `src/lib/bentoStore.tsx`

```typescript
export const BentoAppProvider = ({ children, siteId, draftId }) => {
  // ... existing state
  const [pages, setPages] = useState<Page[]>([]);
  const [currentPageId, setCurrentPageId] = useState<string>('');
  const [theme, setTheme] = useState<ThemeConfig>(DEFAULT_THEME);
  
  // Get current page blocks
  const widgets = pages.find(p => p.id === currentPageId)?.blocks || [];
  
  // Update a block on current page
  const updateWidget = (id: string, data: Partial<WidgetData>) => {
    setPages(prev => prev.map(page => 
      page.id === currentPageId
        ? {
            ...page,
            blocks: page.blocks.map(w => w.id === id ? { ...w, ...data } : w)
          }
        : page
    ));
    undoRedoManager.pushSnapshot(widgets, theme, 'Updated block');
  };
  
  // Add new page
  const addPage = (name: string) => {
    const newPage: Page = {
      id: uuidv4(),
      name,
      slug: slugify(name),
      blocks: [],
      seo: { title: name, description: '', keywords: [] }
    };
    setPages(prev => [...prev, newPage]);
    setCurrentPageId(newPage.id);
    return newPage;
  };
  
  // Delete page
  const deletePage = (pageId: string) => {
    const filtered = pages.filter(p => p.id !== pageId);
    setPages(filtered);
    if (currentPageId === pageId && filtered.length > 0) {
      setCurrentPageId(filtered[0].id);
    }
  };
};
```

---

## PHASE 2: RESPONSIVE BREAKPOINTS & DESIGN TOKENS (Weeks 2–3)

### 2.1 Breakpoint System

**New Component: `components/Editor/ViewportToggle.tsx`**

```typescript
export function ViewportToggle({ value, onChange }) {
  return (
    <div className="flex gap-1 bg-gray-100 p-1 rounded-lg">
      {[
        { label: 'Desktop', value: 'desktop', icon: Monitor, width: 1024 },
        { label: 'Tablet', value: 'tablet', icon: Tablet, width: 768 },
        { label: 'Mobile', value: 'mobile', icon: Smartphone, width: 384 }
      ].map(({ label, value: vp, icon: Icon, width }) => (
        <button
          key={vp}
          onClick={() => onChange(vp)}
          title={`${label} (${width}px)`}
          className={`px-3 py-1.5 rounded flex items-center gap-1 text-xs font-semibold transition-all ${
            value === vp
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Icon size={16} />
          {label}
        </button>
      ))}
    </div>
  );
}
```

### 2.2 Responsive Editor Tab

**New Component: `components/Editor/ResponsivePanel.tsx`**

```typescript
export function ResponsivePanel({ block, viewport, onUpdate }) {
  const currentBreakpoint = viewport as keyof typeof block.responsive;
  const breakpointStyles = block.responsive?.[currentBreakpoint] || {};
  
  return (
    <div className="space-y-4">
      <div className="p-3 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700">
        Editing {viewport.toUpperCase()} breakpoint. Changes apply only to this size.
      </div>
      
      <div>
        <label className="text-xs font-semibold text-gray-700">Font Size</label>
        <select
          value={breakpointStyles.fontSize || block.fontSize || '16'}
          onChange={(e) => onUpdate(block.id, {
            responsive: {
              ...block.responsive,
              [currentBreakpoint]: {
                ...breakpointStyles,
                fontSize: e.target.value
              }
            }
          })}
          className="w-full mt-1 px-2 py-1 border border-gray-300 rounded text-sm"
        >
          <option value="12">12px (Small)</option>
          <option value="14">14px</option>
          <option value="16">16px</option>
          <option value="18">18px</option>
          <option value="20">20px</option>
          <option value="24">24px (Large)</option>
          <option value="32">32px (XL)</option>
        </select>
      </div>
      
      <div>
        <label className="text-xs font-semibold text-gray-700">Padding</label>
        <input
          type="text"
          placeholder="e.g., 16px 24px"
          value={breakpointStyles.padding || block.padding || ''}
          onChange={(e) => onUpdate(block.id, {
            responsive: {
              ...block.responsive,
              [currentBreakpoint]: {
                ...breakpointStyles,
                padding: e.target.value
              }
            }
          })}
          className="w-full mt-1 px-2 py-1 border border-gray-300 rounded text-sm"
        />
      </div>
      
      <div>
        <label className="flex items-center gap-2 text-xs font-semibold text-gray-700">
          <input type="checkbox" className="rounded" />
          Hide on {viewport.toUpperCase()}
        </label>
      </div>
    </div>
  );
}
```

### 2.3 Design Tokens Manager

**New Component: `components/Editor/DesignTokenEditor.tsx`**

```typescript
export function DesignTokenEditor({ theme, onUpdateTheme }) {
  const [activeCategory, setActiveCategory] = useState<'colors' | 'typography' | 'spacing'>('colors');
  
  return (
    <div className="space-y-4">
      <div className="flex gap-1">
        {['colors', 'typography', 'spacing'].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat as any)}
            className={`flex-1 py-1.5 text-xs font-semibold rounded ${
              activeCategory === cat
                ? 'bg-indigo-100 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      
      {activeCategory === 'colors' && (
        <div className="space-y-3">
          {Object.entries(theme.colors).map(([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              <input
                type="color"
                value={value}
                onChange={(e) => onUpdateTheme({
                  ...theme,
                  colors: { ...theme.colors, [key]: e.target.value }
                })}
                className="w-10 h-10 rounded border border-gray-300 cursor-pointer"
              />
              <div className="flex-1">
                <p className="text-xs font-semibold text-gray-700 capitalize">{key}</p>
                <p className="text-xs text-gray-500">{value}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {activeCategory === 'typography' && (
        <div className="space-y-3">
          <div>
            <label className="text-xs font-semibold text-gray-700 block mb-1">Heading Font</label>
            <select
              value={theme.typography.headingFont}
              onChange={(e) => onUpdateTheme({
                ...theme,
                typography: { ...theme.typography, headingFont: e.target.value }
              })}
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
            >
              <option>Inter</option>
              <option>Outfit</option>
              <option>Playfair Display</option>
              <option>Space Grotesk</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-700 block mb-1">Body Font</label>
            <select
              value={theme.typography.bodyFont}
              onChange={(e) => onUpdateTheme({
                ...theme,
                typography: { ...theme.typography, bodyFont: e.target.value }
              })}
              className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
            >
              <option>Inter</option>
              <option>Outfit</option>
              <option>Lora</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
```

---

## PHASE 3: COMPONENT LIBRARY & VARIANTS (Weeks 3–4)

### 3.1 Reusable Components System

**New Service: `src/lib/componentLibrary.ts`**

```typescript
export interface ComponentDef {
  id: string;
  name: string;
  category: 'header' | 'hero' | 'card' | 'form' | 'footer' | 'other';
  baseBlock: WidgetData;
  variants: ComponentVariant[];
  description?: string;
  tags?: string[];
  instances: string[]; // Block IDs using this component
}

export interface ComponentVariant {
  id: string;
  name: string;
  description?: string;
  overrides: Partial<WidgetData>;
  thumbnail?: string;
}

class ComponentLibraryManager {
  async createComponent(name: string, baseBlock: WidgetData): Promise<ComponentDef> {
    const component: ComponentDef = {
      id: uuidv4(),
      name,
      category: 'other',
      baseBlock,
      variants: [
        {
          id: 'default',
          name: 'Default',
          overrides: {}
        }
      ],
      instances: []
    };
    
    await saveToSupabase('components', component);
    return component;
  }
  
  async addVariant(componentId: string, name: string, overrides: Partial<WidgetData>) {
    // Add variant to component
  }
  
  async createInstance(componentId: string, variantId: string, pageId: string) {
    const component = await loadFromSupabase('components', componentId);
    const variant = component.variants.find(v => v.id === variantId);
    
    // Merge base block + variant overrides
    const instance = {
      ...component.baseBlock,
      ...variant?.overrides,
      id: uuidv4(),
      componentId,
      componentVariant: variantId
    };
    
    return instance;
  }
  
  async updateComponent(componentId: string, updates: Partial<ComponentDef>) {
    // Update component AND all its instances
    const instances = await loadInstancesOf(componentId);
    
    for (const instance of instances) {
      await updateWidget(instance.id, updates.baseBlock || {});
    }
  }
}

export const componentLibrary = new ComponentLibraryManager();
```

### 3.2 Component Library UI

**New Component: `components/Editor/ComponentLibrary.tsx`**

```typescript
export function ComponentLibrary({ siteId }) {
  const [components, setComponents] = useState<ComponentDef[]>([]);
  const [selectedComponent, setSelectedComponent] = useState<ComponentDef | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  return (
    <div className="space-y-4">
      <button
        onClick={() => setShowCreateModal(true)}
        className="w-full px-3 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700"
      >
        + Create Component
      </button>
      
      <div className="space-y-2">
        {components.map(comp => (
          <div
            key={comp.id}
            onClick={() => setSelectedComponent(comp)}
            className={`p-3 rounded-lg border cursor-pointer transition-all ${
              selectedComponent?.id === comp.id
                ? 'bg-indigo-50 border-indigo-300'
                : 'bg-white border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="font-semibold text-sm text-gray-900">{comp.name}</div>
            <div className="text-xs text-gray-500 mt-1">{comp.instances.length} instances</div>
            
            {selectedComponent?.id === comp.id && (
              <div className="mt-3 space-y-2 border-t border-indigo-200 pt-3">
                <div className="text-xs font-semibold text-gray-700">Variants</div>
                {comp.variants.map(variant => (
                  <button
                    key={variant.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      componentLibrary.createInstance(comp.id, variant.id, currentPageId);
                    }}
                    className="w-full px-2 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded text-left"
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      {showCreateModal && <CreateComponentModal onClose={() => setShowCreateModal(false)} />}
    </div>
  );
}
```

---

## PHASE 4: SITE IMPORT & CONVERSION (Weeks 4–5)

### 4.1 Import Architecture

**New Services:**

#### `src/lib/importService.ts`
```typescript
export interface ImportMeta {
  source: 'github' | 'url' | 'figma';
  sourceUrl: string;
  components: ExtractedComponent[];
  pages: ImportedPage[];
  theme?: ThemeConfig;
  timestamp: number;
}

export interface ExtractedComponent {
  name: string;
  path: string;
  jsx: string; // Raw JSX
  ast: any; // Parsed AST
  props: ComponentProp[];
  dependencies: string[];
}

export interface ComponentProp {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: any;
}

export async function importFromGitHub(
  repoUrl: string,
  branch: string = 'main'
): Promise<ImportMeta> {
  // 1. Authenticate and fetch repo
  const octokit = new Octokit({ auth: githubToken });
  const [owner, repo] = repoUrl.split('/').slice(-2);
  
  // 2. Get file tree
  const files = await octokit.repos.getContent({
    owner,
    repo,
    path: 'src/components',
    ref: branch
  });
  
  // 3. Parse each component
  const components: ExtractedComponent[] = [];
  for (const file of files) {
    if (file.type === 'file' && file.name.endsWith('.tsx')) {
      const content = await octokit.repos.getContent({
        owner,
        repo,
        path: file.path,
        ref: branch
      });
      
      const jsx = Buffer.from(content.content, 'base64').toString('utf-8');
      const parsed = parseComponentAST(jsx);
      components.push({
        name: file.name.replace('.tsx', ''),
        path: file.path,
        jsx,
        ast: parsed,
        props: extractProps(parsed),
        dependencies: extractDependencies(parsed)
      });
    }
  }
  
  // 4. Convert to blocks
  const blocks = await Promise.all(
    components.map(c => suggestBlockType(c))
  );
  
  return {
    source: 'github',
    sourceUrl: repoUrl,
    components,
    pages: [{ name: 'Imported', blocks }],
    timestamp: Date.now()
  };
}

export async function importFromURL(url: string): Promise<ImportMeta> {
  // Use Playwright to scrape
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto(url, { waitUntil: 'networkidle' });
  
  // Extract DOM structure
  const html = await page.content();
  const dom = parse(html);
  
  // Extract colors, fonts, spacing
  const styles = await page.evaluate(() => {
    const sheets: any = [];
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules || []) {
          sheets.push({
            selector: rule.selectorText,
            css: rule.cssText
          });
        }
      } catch (e) {
        // Cross-origin styles
      }
    }
    return sheets;
  });
  
  const theme = extractThemeFromStyles(styles);
  const blocks = convertDOMToBlocks(dom);
  
  await browser.close();
  
  return {
    source: 'url',
    sourceUrl: url,
    components: [],
    pages: [{ name: 'Imported from ' + new URL(url).hostname, blocks }],
    theme,
    timestamp: Date.now()
  };
}

async function suggestBlockType(component: ExtractedComponent) {
  // Use Claude API to match component to block type
  const response = await fetch('/api/import/convert', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      componentName: component.name,
      jsx: component.jsx.substring(0, 500), // First 500 chars
      props: component.props
    })
  });
  
  const { blockType, confidence } = await response.json();
  
  return {
    id: uuidv4(),
    type: blockType,
    title: component.name,
    importMeta: {
      source: 'imported',
      originalFile: component.path,
      confidence
    }
  };
}
```

#### `src/app/api/import/convert/route.ts`
```typescript
export async function POST(req: Request) {
  const { componentName, jsx, props } = await req.json();
  
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      model: 'claude-3-opus-20240229',
      max_tokens: 200,
      messages: [{
        role: 'user',
        content: `Given this React component, suggest the best page builder block type from this list: hero, text, image, gallery, video, pricing, testimonial, faq, product, features-grid, cta, footer.

Component: ${componentName}
Props: ${props.map(p => p.name).join(', ')}
Code snippet:
\`\`\`tsx
${jsx}
\`\`\`

Respond with JSON: { "blockType": "...", "confidence": 0.95 }`
      }]
    })
  });
  
  const data = await response.json();
  const match = data.content[0].text.match(/\{.*\}/);
  const result = JSON.parse(match[0]);
  
  return Response.json(result);
}
```

### 4.2 Import Flow UI

**New Pages:**

#### `src/app/editor/import/page.tsx`
```typescript
export default function ImportPage() {
  const [importMethod, setImportMethod] = useState<'github' | 'url' | 'figma' | null>(null);
  
  if (!importMethod) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 p-6">
        <div className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl w-full">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Import Your Site</h1>
          <p className="text-gray-600 mb-8">Start with an existing project and edit it with drag-and-drop</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button
              onClick={() => setImportMethod('github')}
              className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
            >
              <Github size={32} className="text-gray-600 group-hover:text-indigo-600 mb-2" />
              <div className="font-semibold text-gray-900">GitHub</div>
              <div className="text-sm text-gray-500 mt-1">Connect your repo</div>
            </button>
            
            <button
              onClick={() => setImportMethod('url')}
              className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
            >
              <Globe size={32} className="text-gray-600 group-hover:text-indigo-600 mb-2" />
              <div className="font-semibold text-gray-900">Website URL</div>
              <div className="text-sm text-gray-500 mt-1">Scrape existing site</div>
            </button>
            
            <button
              onClick={() => setImportMethod('figma')}
              className="p-6 border-2 border-gray-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
            >
              <Figma size={32} className="text-gray-600 group-hover:text-indigo-600 mb-2" />
              <div className="font-semibold text-gray-900">Figma</div>
              <div className="text-sm text-gray-500 mt-1">Import from design</div>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  if (importMethod === 'github') {
    return <GitHubImporter />;
  } else if (importMethod === 'url') {
    return <URLImporter />;
  } else {
    return <FigmaImporter />;
  }
}
```

#### `components/Import/GitHubImporter.tsx`
```typescript
export function GitHubImporter() {
  const [repoUrl, setRepoUrl] = useState('');
  const [importing, setImporting] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const handleImport = async () => {
    setImporting(true);
    setProgress(0);
    
    try {
      const response = await fetch('/api/import/github', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ repoUrl })
      });
      
      const meta: ImportMeta = await response.json();
      
      // Save imported site
      await fetch('/api/sites/import', {
        method: 'POST',
        body: JSON.stringify({ importMeta })
      });
      
      // Redirect to editor
      window.location.href = `/editor/${meta.siteId}`;
    } catch (err) {
      alert('Import failed: ' + err.message);
      setImporting(false);
    }
  };
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Import from GitHub</h2>
        
        {importing && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Loader2 size={20} className="animate-spin text-indigo-600" />
              <span className="text-gray-600">Importing components...</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        )}
        
        {!importing && (
          <>
            <input
              type="text"
              placeholder="https://github.com/username/repo"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:border-indigo-500 focus:outline-none"
            />
            
            <button
              onClick={handleImport}
              disabled={!repoUrl}
              className="w-full mt-4 px-4 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 disabled:opacity-50"
            >
              Import Repository
            </button>
          </>
        )}
      </div>
    </div>
  );
}
```

---

## FILE STRUCTURE SUMMARY

```
src/
├── app/
│   ├── editor/
│   │   ├── [siteId]/page.tsx
│   │   ├── import/
│   │   │   ├── page.tsx
│   │   │   ├── github/page.tsx
│   │   │   └── url/page.tsx
│   │   └── layout.tsx
│   └── api/
│       ├── import/
│       │   ├── github/route.ts
│       │   ├── url/route.ts
│       │   └── convert/route.ts
│       ├── components/route.ts
│       └── themes/route.ts
│
├── components/
│   └── Editor/
│       ├── EditorLayout.tsx
│       ├── TopNavbar.tsx
│       ├── LayerTree.tsx
│       ├── Canvas.tsx
│       ├── CanvasToolbar.tsx
│       ├── PropertiesPanel.tsx
│       ├── ViewportToggle.tsx
│       ├── DesignTokenEditor.tsx
│       ├── ComponentLibrary.tsx
│       └── ResponsivePanel.tsx
│   └── Import/
│       ├── GitHubImporter.tsx
│       ├── URLImporter.tsx
│       └── FigmaImporter.tsx
│
├── lib/
│   ├── importService.ts
│   ├── componentLibrary.ts
│   ├── themeManager.ts
│   ├── breakpointManager.ts
│   ├── interactionEngine.ts
│   └── ... (existing)
│
└── types/
    ├── bento.ts (UPDATE)
    ├── import.ts
    ├── component.ts
    ├── theme.ts
    └── interaction.ts
```

---

## IMPLEMENTATION TIMELINE

| Phase | Duration | Focus | Status |
|-------|----------|-------|--------|
| Phase 0 | ✅ Done | Draft persistence, undo/redo | Complete |
| Phase 1 | Weeks 1–2 | Canvas-first UI, layers, properties panel | Next |
| Phase 2 | Weeks 2–3 | Breakpoints, design tokens | Parallel |
| Phase 3 | Weeks 3–4 | Component library, variants | Dependent on Phase 1 |
| Phase 4 | Weeks 4–5 | Site import (GitHub, URL) | Dependent on Phase 3 |
| Phase 5 | Weeks 5–6 | Interactions, SEO, export | Polish |

---

## COMPETITIVE ADVANTAGE

**vs. Webflow:**
- Export real Next.js components (not HTML)
- Built-in draft persistence
- Component variants like Figma
- Faster learning curve (familiar to developers)

**vs. Wix:**
- No "magic" AI nonsense; pure drag-drop
- Code-exportable (not vendor-locked)
- Import existing sites (Wix can't do this)

**vs. Figma:**
- Specifically for websites (not design files)
- Auto-publish to Vercel/custom domain
- Pre-built block library (not blank canvas)
- Real Next.js components

---

## START HERE (Next Week)

1. **Week 1 Monday:** Build EditorLayout, TopNavbar, LayerTree components
2. **Week 1 Wednesday:** Refactor Canvas to add hover toolbars, integrate with new layout
3. **Week 2 Monday:** Build PropertiesPanel, wire up Content/Style/Responsive tabs
4. **Week 2 Wednesday:** Update bentoStore for multi-page, test page switching
5. **Week 2 Friday:** Polish UI, test keyboard shortcuts, verify undo/redo still works

This is the **foundation** for everything else. Get Phase 1 right, and the rest flows naturally.
