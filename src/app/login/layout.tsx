import { Metadata } from 'next';

export const metadata = {
    title: "Login - Chronus Sports",
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
