import WorkPreviewBanner from '@/components/WorkPreviewBanner';

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <WorkPreviewBanner />
    </>
  );
}
