import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
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
            <a href="#features" className="nav-link">Features</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#faq" className="nav-link">FAQ</a>
          </div>
          <div className="nav-right" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <a href="#pricing" className="btn btn-outline" style={{ padding: '8px 16px' }}>
              Get License
            </a>
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
            <a href="#" className="footer-link">Privacy</a>
            <a href="#" className="footer-link">Terms</a>
            <a href="#" className="footer-link">Support</a>
            <a href="#" className="footer-link">Twitter</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
