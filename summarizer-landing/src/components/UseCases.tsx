import React from 'react';

const UseCases: React.FC = () => {
    return (
        <section id="use-cases" className="use-cases">
            <h2>Use Cases</h2>
            <ul>
                <li>
                    <h3>Academic Research</h3>
                    <p>Summarize lengthy research papers to quickly grasp key findings and methodologies.</p>
                </li>
                <li>
                    <h3>Business Reports</h3>
                    <p>Extract essential information from extensive business reports for efficient decision-making.</p>
                </li>
                <li>
                    <h3>News Articles</h3>
                    <p>Get concise summaries of news articles to stay informed without reading full texts.</p>
                </li>
                <li>
                    <h3>Legal Documents</h3>
                    <p>Summarize complex legal documents to understand critical clauses and implications.</p>
                </li>
                <li>
                    <h3>Content Creation</h3>
                    <p>Generate summaries of articles and documents to create engaging content for blogs and social media.</p>
                </li>
            </ul>
        </section>
    );
};

export default UseCases;