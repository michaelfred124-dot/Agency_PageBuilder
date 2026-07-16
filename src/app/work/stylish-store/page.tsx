import TemplatePageRenderer from '@/components/templates/TemplatePageRenderer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stylish Store | Michaelfred Designs',
  description: 'Modern e-commerce experience for stylish apparel.',
};

export default function StylishStorePage() {
  return <TemplatePageRenderer templateKey="stylish_store" />;
}
