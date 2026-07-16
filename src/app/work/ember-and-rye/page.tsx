import TemplatePageRenderer from '@/components/templates/TemplatePageRenderer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ember & Rye | Michaelfred Designs',
  description: 'Premium steakhouse and wood-fired grill in Chicago.',
};

export default function EmberAndRyePage() {
  return <TemplatePageRenderer templateKey="ember_rye" />;
}
