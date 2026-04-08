import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionLink from '@/components/ui/SectionLink';
import './globals.css';

export const metadata: Metadata = {
  title: 'LocalVert - Private Local File Converter',
  description: 'Convert, Resize & Rename Files Right in Your Browser',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="bg-glow"></div>
        <nav className="navbar">
          <Link href="/" className="logo">
            <Image src="/images/logo.png" alt="LocalVert logo" width={24} height={24} />
            LocalVert
          </Link>
          <div className="nav-links">
            <SectionLink href="#features" className="nav-link">Features</SectionLink>
            <SectionLink href="#pricing" align="center" className="nav-link">Pricing</SectionLink>
            <SectionLink href="#faq" align="center" className="nav-link">FAQ</SectionLink>
          </div>
          <div className="nav-right" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <SectionLink href="#pricing" align="center" className="btn btn-outline" style={{ padding: '8px 16px' }}>
              Get License
            </SectionLink>
          </div>
        </nav>

        <main style={{ flexGrow: 1 }}>
          {children}
        </main>

        <footer className="footer">
          <Link href="/" className="logo">
            <Image src="/images/logo.png" alt="LocalVert logo" width={24} height={24} />
            LocalVert
          </Link>
          <div className="footer-links">
            <SectionLink href="#features" className="footer-link">Features</SectionLink>
            <SectionLink href="#pricing" align="center" className="footer-link">Pricing</SectionLink>
            <SectionLink href="#faq" align="center" className="footer-link">Support</SectionLink>
            <SectionLink href="#top" className="footer-link">Top</SectionLink>
            <Link href="/contact" className="footer-link">Contact</Link>
            <Link href="/credits" className="footer-link">Credits</Link>
            <Link href="/privacy" className="footer-link">Privacy</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
