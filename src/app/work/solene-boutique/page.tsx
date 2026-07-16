import TemplatePageRenderer from '@/components/templates/TemplatePageRenderer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solène Boutique | Michaelfred Designs',
  description: 'Curated home goods and gifts from independent makers.',
};

export default function SoleneBoutiquePage() {
  return <TemplatePageRenderer templateKey="solene_boutique" />;
}
