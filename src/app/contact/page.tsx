import React from 'react';

export default function ContactPage() {
  return (
    <div className="page-shell">
      <div className="hero" style={{ paddingBottom: '40px' }}>
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle" style={{ marginBottom: '20px' }}>We&apos;re here to help</p>
      </div>
      <div className="content-wrapper">
        <p>Have a question, issue, or feedback about LocalVert? The fastest way to reach us is by email.</p>

        <h2>Email Support</h2>
        <p>Click the button below to open your email app. Please briefly describe your query in the subject.</p>

        <div style={{ marginTop: '40px', marginBottom: '40px', display: 'flex', justifyContent: 'center' }}>
          <a href="mailto:itzmohammadkhan@gmail.com" className="btn btn-primary" style={{ padding: '12px 32px', fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Contact via Email
          </a>
        </div>
        
        <p style={{ color: 'var(--text-tertiary)', textAlign: 'center' }}>
          Or email us directly at: <strong style={{ color: 'var(--text-primary)' }}>itzmohammadkhan@gmail.com</strong>
        </p>
      </div>
    </div>
  );
}
