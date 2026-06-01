import './globals.css';
import ClientLayout from '@/components/ClientLayout';

export const metadata = {
  title: 'Michaelfred Designs',
  description: 'Custom, high-performance website and application builder built for modern business authority.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var hostname = window.location.hostname;
                  var isRoot = ['michaelfreddesigns.com', 'www.michaelfreddesigns.com', 'localhost', '127.0.0.1'].indexOf(hostname) !== -1 || hostname.endsWith('.vercel.app');
                  var isSub = hostname.endsWith('.michaelfreddesigns.com') && hostname !== 'michaelfreddesigns.com' && hostname !== 'www.michaelfreddesigns.com';
                  if (!isRoot || isSub) {
                    document.documentElement.classList.add('is-tenant-site');
                  }
                } catch (e) {
                  console.error(e);
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-black selection:text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
