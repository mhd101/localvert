import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="page-shell">
      <div className="hero" style={{ paddingBottom: '40px' }}>
        <h1 className="section-title">Privacy Policy</h1>
        <p className="section-subtitle" style={{ marginBottom: '20px' }}>How LocalVert handles your data</p>
      </div>
      <div className="content-wrapper">
        <p>This Privacy Policy explains how the browser extension &ldquo;LocalVert&rdquo; handles user data. The extension is designed with privacy in mind and does not collect, store, or sell personal information.</p>

        <h2>Data Collection</h2>
        <p>LocalVert does not collect or transmit personally identifiable information such as names, email addresses, phone numbers, passwords, or account credentials.</p>

        <h2>Website Content Access</h2>
        <p>LocalVert accesses only visible content on web pages&mdash;such as images, documents, and page layouts&mdash;when you actively use features like right-click formatting, full-page screenshots, bulk image extraction, or native download interception. All file conversion, resizing, and processing are performed entirely locally within your browser, and your files are never sent to external servers.</p>

        <h2>User Activity</h2>
        <p>The extension detects user interactions specifically to enable its core features, such as intercepting a file download to convert it or capturing a selected area for a screenshot. This activity is processed smoothly in real time, is not logged, and is never shared with third parties.</p>

        <h2>Local Storage</h2>
        <p>LocalVert uses standard browser storage strictly to save your configurations and feature-related preferences. This includes your custom auto-convert rules, rename patterns, resizing dimensions, and image quality presets. This data remains securely on your device and can be erased at any time by clearing your browser data or uninstalling the extension.</p>

        <h2>Payments and Licensing</h2>
        <p>LocalVert does not collect or store payment information. All payments and premium license activations are handled securely by third-party payment providers. LocalVert only verifies your license key&apos;s validity and does not have access to your financial details.</p>

        <h2>Open-Source Libraries &amp; Assets</h2>
        <p>LocalVert leverages trusted open-source libraries such as JSZip for bundling images and jsPDF for document generation. These libraries run entirely within your local browser environment, and absolutely no data is transmitted to their authors or any external servers.</p>
        <p>Icons and vector assets used in LocalVert are sourced from public domain (PD) or permissively licensed providers. Proper attribution is provided in the extension&apos;s metadata.</p>

        <h2>Data Sharing</h2>
        <p>LocalVert does not sell, rent, or share user data with third parties. All file processing, zipping, resizing, and renaming operations are performed locally on your machine.</p>

        <h2>Security</h2>
        <p>Reasonable measures are taken to ensure the extension operates securely. Since all complex processing runs locally and no sensitive or personal data is ever collected or transmitted, the risk of data exposure is significantly minimized.</p>
      </div>
    </div>
  );
}
