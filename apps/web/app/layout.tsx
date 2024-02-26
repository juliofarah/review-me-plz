import { ClerkProvider } from '@clerk/nextjs';
import { Providers } from './providers';
import { Noto_Sans } from 'next/font/google'
import { Sidenav } from './components/sidenav'
import './styles/base.css'
import Head from 'next/head'
import { Header } from './components/header'

const noto = Noto_Sans({
  subsets: ['latin'],
  weight: '400',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className="h-full">

    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link
          rel="icon"
          key="icon"
          href={'/favicon.ico'}
        />
    </Head>

        <body className={`w-full h-full overflow-hidden bg-white ${noto.className}`}>
          <div className="h-full w-full">
            <div className="flex flex-row">
              <Header />
              <Sidenav />
            </div>
            <Providers>{children}</Providers>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
