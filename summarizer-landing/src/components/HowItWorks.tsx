import React from 'react';

const HowItWorks: React.FC = () => {
    return (
        <section className="how-it-works">
            <h2>How It Works</h2>
            <p>
                Our document and article summarizer uses advanced algorithms to analyze and condense large texts into concise summaries. 
                Simply upload your document or paste the article text, and specify your summarization preferences.
            </p>
            <h3>Step-by-Step Process:</h3>
            <ol>
                <li>Upload your document or paste the article text.</li>
                <li>Select your summarization preferences, such as length and focus areas.</li>
                <li>Click on the "Summarize" button to generate your summary.</li>
                <li>Review and download your summarized content.</li>
            </ol>
            <p>
                Experience the power of efficient reading and comprehension with our summarizer tool!
            </p>
        </section>
    );
};

export default HowItWorks;