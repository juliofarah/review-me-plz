import { Providers } from "./providers";
import { Figtree } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${figtree.variable} h-full`}>
      <body className="h-full overflow-hidden bg-white font-figtree">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
