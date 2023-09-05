import { ClerkProvider } from '@clerk/nextjs';
import { Providers } from './providers';
import { Noto_Sans } from 'next/font/google'
import { Sidenav } from './components/sidenav'
import './styles/base.css'

const noto = Noto_Sans({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">
        <body className={`flex w-full h-full overflow-hidden bg-white ${noto.className}`}>
          <div className="flex flex-col h-full w-full">
            <Sidenav />
            <Providers>{children}</Providers>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
