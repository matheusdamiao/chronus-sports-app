import { Metadata } from 'next';
import './globals.css'
import MainMenu from './components/mainMenu';
import Script from 'next/script';
import CookieBanner from './components/cookieBanner';

export const metadata: Metadata = {
  title: 'Chronus Sports',
  description: 'The world largest sports platform',
  metadataBase: new URL('https://chronus-sports-app.vercel.app/'),
  openGraph: {
    title: 'The World Largest sports platform',
    siteName: 'Chronus Sports',
    type: 'website',
    url:'https://chronus-sports-app.vercel.app/',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Preview image of Chronus Sports'
      }
    ]
  },
  twitter: {

  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='bg-[#010317]'>
      
      <body className='bg-[#010317] w-full h-full'>
        <CookieBanner/>
        {children}
      </body>
    </html>
  );
}
