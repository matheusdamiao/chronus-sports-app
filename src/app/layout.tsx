import { Metadata } from 'next';
import './globals.css'
import MainMenu from './components/mainMenu';

export const metadata: Metadata = {
  title: 'Chronus Sports',
  description: 'The world largest sports plataform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body>
        {/* <MainMenu/> */}
        {children}
      </body>
    </html>
  );
}
