import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '../components/Chrome';

// Archivo: variable grotesque with a width axis (expanded for display, normal for text).
// IBM Plex Mono: drawing-annotation style labels, eyebrows and reference numbers.
const sans = Archivo({ subsets: ['latin'], axes: ['wdth'], variable: '--font-sans', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  title: { default: 'BHC Engineering & Design | Architecture and Engineering, Johannesburg', template: '%s | BHC Engineering & Design' },
  description: 'Architectural design, engineering design, consultancy and EPC project delivery for residential, commercial and industrial clients in South Africa.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-ZA" className={`${sans.variable} ${mono.variable}`}>
    <body>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Header />
      <main id="main" tabIndex={-1}>{children}</main>
      <Footer />
    </body>
  </html>;
}
