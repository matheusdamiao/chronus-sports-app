import { Metadata } from 'next';
import MainMenu from '../components/mainMenu';

export const metadata = {
    title: "Creators - Chronus Sports",
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <div className='bg-[#010317]'>{children}</div>
   
  );
}
