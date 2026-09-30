import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from '../components/Chrome';

export const metadata: Metadata = {
  title: 'BHC Engineering & Design | Architecture and Engineering, Johannesburg',
  description: 'Architectural design, engineering design, consultancy and EPC project delivery for residential, commercial and industrial clients in South Africa.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main>{children}</main><Footer /></body></html>;
}
