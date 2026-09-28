import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BHC Engineering & Design',
  description: 'Architecture, engineering, consultancy and project delivery solutions.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
