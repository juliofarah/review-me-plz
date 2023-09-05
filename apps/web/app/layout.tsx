import { ClerkProvider } from '@clerk/nextjs';
import { Providers } from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className="h-full overflow-hidden bg-white">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
