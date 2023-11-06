import '@/app/ui/global.css'
// TODO: Chp#3 Importing new fonts
import {inter } from '@/app/ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* TODO: Chp#3 Using new font inter in body tag*/}
      <body className={`${inter.className} antialiased`} >
        {children}
      </body>
    </html>
  );
}
