import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar container">
      <div className="logo">
         <img src="/home_logo.png" alt="AIONIX" className="logo-img" />
      </div>
      <div className="nav-links">
         <a href="#home">Home</a>
         <a href="#platform">Platform</a>
         <a href="#features">Features</a>
         <a href="#integrations">Integrations</a>
         <a href="#insights">Insights</a>
         <a href="#contact">Contact</a>
      </div>
      <div className="nav-actions">
         <button className="button button-gradient">GET EARLY ACCESS</button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero-section container">
      <div className="hero-content">
        <h1 className="hero-title">
          <span>Automate Intelligence.</span>
          <span>Amplify Growth.</span>
        </h1>
        <p>Aionix combines artificial intelligence with automation to optimize your operations. From predictive insights to workflow orchestration, we empower teams to make smarter, faster decisions — effortlessly. Experience the evolution of intelligent automation.</p>
        <div className="hero-actions">
           <button className="button button-gradient">GET STARTED</button>
           <button className="button button-outline">SEE PLATFORM DEMO</button>
        </div>
      </div>
      <div className="hero-graphic">
        <img src="/hero_section_image.png" alt="AIONIX Brain Graphic" className="hero-image" />
      </div>
    </section>
  );
};

const Features = () => {
  const featureList = [
    {
      title: "Adaptive Learning Engine",
      description: "AI that improves with every workflow.",
      icon: "/Brain.png"
    },
    {
      title: "No-Code Automation",
      description: "Build processes visually in seconds.",
      icon: "/diamond.png"
    },
    {
      title: "Smart Analytics",
      description: "Real-time insights that drive decisions.",
      icon: "/dashboard.png"
    }
  ];

  return (
    <section id="features" className="features-section container">
      <h2 className="section-title">Built To Think, Learn, And Automate.</h2>
      <p className="section-subtitle">Our platform goes beyond static automation — it adapts, learns, and evolves with your business data. We integrate AI that understands context, prioritizes performance, and reduces manual work.</p>
      <div className="features-grid">
        {featureList.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-img-container">
              <img src={feature.icon} alt={feature.title} className="feature-icon-img" />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Capabilities = () => {
  const capabilityList = [
    {
       title: "Workflow Orchestration",
       description: "Connect and automate across all tools.",
       icon: "/workflow.png"
    },
    {
       title: "Predictive Insights",
       description: "Forecast trends with data-driven precision.",
       icon: "/predictive.png"
    },
    {
       title: "AI Assistant",
       description: "Automate repetitive tasks with commands.",
       icon: "/ai assistant.png"
    },
    {
       title: "Multi-App Integration",
       description: "Works seamlessly with 100+ platforms.",
       icon: "/multi app integration.png"
    },
    {
       title: "Data Visualization",
       description: "See the bigger picture instantly.",
       icon: "/data visualisation.png"
    },
    {
       title: "Security & Compliance",
       description: "Enterprise-grade protection.",
       icon: "/cyber-security.png"
    }
  ];

  return (
    <section className="capabilities-section container">
      <h2 className="capabilities-title">The Future of Work, Powered by AI.</h2>
      <div className="capabilities-grid">
        {capabilityList.map((cap, index) => (
           <div className="capability-card" key={index}>
              <div className="cap-img-container">
                <img src={cap.icon} alt={cap.title} className="cap-icon-img" />
              </div>
              <h3>{cap.title}</h3>
              <p>{cap.description}</p>
           </div>
        ))}
      </div>
    </section>
  );
};

const Workflow = () => {
  const steps = [
    { name: "Connect", description: "Integrate apps in one click" },
    { name: "Analyze", description: "AI detects workflow patterns" },
    { name: "Automate", description: "Executes smart actions" },
    { name: "Optimize", description: "Learns and improves over time" }
  ];

  return (
    <section className="workflow-section container">
      <h2 className="section-title">Automation In Motion</h2>
      <div className="workflow-container">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="workflow-step">
              <div className="step-circle">
                <span>0{index + 1}</span>
              </div>
              <h4>{step.name}</h4>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div className="workflow-arrow">
                <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 35C20 15 45 5 95 15" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="4 4" />
                  <path d="M90 10L95 15L90 20" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

const Industries = () => {
  const industries = [
     { 
       title: "Finance", 
       description: "Automate data reporting and compliance.",
       icon: "/finance.png"
     },
     { 
       title: "Healthcare", 
       description: "Simplify scheduling and patient analytics.",
       icon: "/healthcare.png"
     },
     { 
       title: "Operations", 
       description: "Streamline internal approvals and audits.",
       icon: "/operations.png" 
     },
     { 
       title: "E-Commerce", 
       description: "Manage orders, inventory, and recommendations.",
       icon: "/e-commerce.png"
     }
  ];

  return (
    <section className="industries-section container">
      <h2 className="industry-title">
        <span>Smarter Automation Across Every</span>
        <span>Industry.</span>
      </h2>
      <div className="industries-grid">
        {industries.map((ind, index) => (
          <div className="industry-card" key={index}>
            <div className="industry-img-container">
              <img src={ind.icon} alt={ind.title} className="industry-icon-img" />
            </div>
            <h3>{ind.title}</h3>
            <p>{ind.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Integrations = () => {
  const apps = [
    { name: "Figma", icon: "/figma.png" },
    { name: "Slack", icon: "/slack.png" },
    { name: "Salesforce", icon: "/salesforce.png" },
    { name: "Notion", icon: "/notion.png" },
    { name: "Zapier", icon: "/zapier.png" },
    { name: "Gmail", icon: "/gmail.png" }
  ];

  return (
    <section id="integrations" className="integrations-section container">
      <h2 className="integrations-title">Works Seamlessly With Your Ecosystem.</h2>
      <p className="section-subtitle">Connect over 100+ apps to automate your entire digital ecosystem — no code required.</p>
      <div className="integrations-grid">
        {apps.map((app, index) => (
          <div className="integration-card" key={index}>
             <div className="int-img-container">
                <img src={app.icon} alt={app.name} className="int-icon-img" />
             </div>
             <span>{app.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-wrapper">
          <h2 className="cta-title">
            Automate Everything. Achieve<br />Anything.
          </h2>
          <p className="cta-subtitle">
            Join the next generation of smart enterprises that automate workflows, decisions, <br />
            and growth — all powered by AI.
          </p>
          <button className="button-primary cta-btn">GET EARLY ACCESS</button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/home_logo.png" alt="Aionix" className="footer-logo-img" />
            </div>
            <p className="footer-tagline">Redefining automation with AI that learns, adapts, and grows.</p>
          </div>
          
          <div className="footer-nav">
            <h4>QUICK NAVIGATION</h4>
            <ul>
              <li><a href="#home" className="active-footer-link">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#capabilities">Platform</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>QUICK CONTACT</h4>
            <div className="social-links">
              <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-icon"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-line"></div>
          <p>© 2025 Real Estates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Capabilities />
        <Workflow />
        <Industries />
        <Integrations />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;

