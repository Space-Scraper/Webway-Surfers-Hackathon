import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="features">
      <div className="features-header">
        <h2>Key Features</h2>
      </div>

      <ul className="features-grid">
        <li className="feature-card">
          <h3>Customizable Summaries</h3>
          <p>Summarize documents and articles based on your specific requirements, including length and focus areas.</p>
        </li>
        <li className="feature-card">
          <h3>Fast and Efficient</h3>
          <p>Get quick summaries of large documents without compromising on quality.</p>
        </li>
        <li className="feature-card">
          <h3>User-Friendly Interface</h3>
          <p>Enjoy an intuitive interface that makes summarization easy for everyone.</p>
        </li>
        <li className="feature-card">
          <h3>Multi-Format Support</h3>
          <p>Summarize various document formats, including PDFs, Word documents, and web articles.</p>
        </li>
        <li className="feature-card">
          <h3>Secure and Private</h3>
          <p>Your documents are processed securely, ensuring your privacy and data protection.</p>
        </li>
      </ul>
    </section>
  );
};

export default Features;


