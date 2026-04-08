import React from 'react';

export default function CreditsPage() {
  return (
    <div className="page-shell">
      <div className="hero" style={{ paddingBottom: '40px' }}>
        <h1 className="section-title">Credits &amp; Attributions</h1>
        <p className="section-subtitle" style={{ marginBottom: '20px' }}>Powered by amazing open-source projects</p>
      </div>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px 80px', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
        <p style={{ marginBottom: '24px' }}>LocalVert is built using high-quality open-source libraries and permissively licensed assets. We sincerely thank the creators and maintainers for their contributions to the open-source software community.</p>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px', fontSize: '24px' }}>Icons &amp; Vectors</h2>
        <p style={{ marginBottom: '24px' }}>Vectors and icons used throughout the interface are sourced from permissively licensed providers (such as SVG Repo or Feather Icons) under the Public Domain (PD) or MIT Licenses.</p>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px', fontSize: '24px' }}>Format Processing &amp; Archives</h2>
        <p style={{ marginBottom: '24px' }}>ZIP archive generation and bulk native extraction are powerfully handled entirely offline using JSZip by Stuart Knightley.</p>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px', fontSize: '24px' }}>Document Generation</h2>
        <p style={{ marginBottom: '24px' }}>PDF document generation, image stitching, and rendering are powered by jsPDF by yWorks/James Hall.</p>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px', fontSize: '24px' }}>Page Extraction &amp; Markdown Parsing</h2>
        <p style={{ marginBottom: '24px' }}>Clean webpage content simplification and structural reading-mode extraction are powered by Readability.js by Mozilla. High-fidelity conversion from rich HTML directly to pure Markdown is cleanly executed by Turndown by Dom Christie.</p>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', marginBottom: '16px', fontSize: '24px' }}>License Notice</h2>
        <p style={{ marginBottom: '24px' }}>All third-party libraries are heavily respected and used in strict accordance with their respective open-source licenses. LocalVert does not claim any ownership over third-party code or exterior design assets.</p>
      </div>
    </div>
  );
}
