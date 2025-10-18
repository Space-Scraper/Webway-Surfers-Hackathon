import React from 'react';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="pricing">
            <h2>Pricing Plans</h2>
            <div className="pricing-plans">
                <div className="plan">
                    <h3>Basic Plan</h3>
                    <p>Perfect for individuals who need occasional summarization.</p>
                    <p>Price: $9.99/month</p>
                    <button>Choose Plan</button>
                </div>
                <div className="plan">
                    <h3>Pro Plan</h3>
                    <p>Ideal for professionals who require frequent summarization.</p>
                    <p>Price: $19.99/month</p>
                    <button>Choose Plan</button>
                </div>
                <div className="plan">
                    <h3>Enterprise Plan</h3>
                    <p>Best for teams and organizations needing bulk summarization.</p>
                    <p>Contact us for pricing</p>
                    <button>Contact Sales</button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;