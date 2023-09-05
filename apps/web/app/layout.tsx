import { ClerkProvider } from '@clerk/nextjs';
import { Figtree } from 'next/font/google';
import { Providers } from './providers';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${figtree.variable} h-full`}>
        <body className="h-full overflow-hidden bg-white font-figtree">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
