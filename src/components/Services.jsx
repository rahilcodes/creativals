import React, { useState } from 'react';
import { Instagram, LineChart, Globe, Star, Zap, ChevronRight, Check } from 'lucide-react';

const services = [
  {
    id: 'social',
    icon: <Instagram size={20} />,
    name: 'Social Media',
    title: 'Get Customers From Instagram & Facebook',
    before: {
      label: 'The Old Way',
      text: 'Posting 3 times a week. Getting a few likes from friends. Zero actual sales.',
    },
    after: {
      label: 'Our Simple Way',
      text: 'Making videos and posts that make people want to buy from you right now.',
    },
    bullets: [
      'Short videos that get attention',
      'Building trust with your local community',
      'Turning followers into paying customers',
      'Replying to messages automatically',
    ],
  },
  {
    id: 'ads',
    icon: <LineChart size={20} />,
    name: 'Paid Ads',
    title: 'Ads That Actually Make You Money',
    before: {
      label: 'The Old Way',
      text: 'Giving ₹50,000 to Google and getting nothing but confusing reports.',
    },
    after: {
      label: 'Our Simple Way',
      text: 'We spend ₹1 to make you ₹3 or more back. Clear math. No guessing.',
    },
    bullets: [
      'Google ads for people ready to buy',
      'Facebook and Instagram ads that work',
      'Showing ads to your old customers',
      'Weekly reports you can actually understand',
    ],
  },
  {
    id: 'seo',
    icon: <Globe size={20} />,
    name: 'Google Search & Website',
    title: 'Be Number One on Google',
    before: {
      label: 'The Old Way',
      text: 'Having a pretty website that nobody ever visits or finds on Google.',
    },
    after: {
      label: 'Our Simple Way',
      text: 'When people search for what you sell, you show up first. Simple.',
    },
    bullets: [
      'Getting you to the top of Google Maps',
      'Websites that load fast on mobile phones',
      'Pages built to make people call you',
      'Easy forms for people to contact you',
    ],
  },
  {
    id: 'reputation',
    icon: <Star size={20} />,
    name: 'More 5-Star Reviews',
    title: 'Make People Trust You',
    before: {
      label: 'The Old Way',
      text: 'Hoping happy customers remember to leave a review (they never do).',
    },
    after: {
      label: 'Our Simple Way',
      text: 'A system that automatically asks happy customers for 5-star Google reviews.',
    },
    bullets: [
      'Getting 50+ new Google reviews fast',
      'Fixing bad reviews before they hurt you',
      'Looking better than the guy down the street',
      'Making you the most trusted name in town',
    ],
  },
  {
    id: 'full',
    icon: <Zap size={20} />,
    name: 'The Full System',
    title: 'We Handle Everything For You',
    before: {
      label: 'The Old Way',
      text: 'Hiring 4 different people for ads, website, social media, and Google.',
    },
    after: {
      label: 'Our Simple Way',
      text: 'One team running your entire growth system. You just run your business.',
    },
    bullets: [
      'Everything listed above',
      'One single team to talk to',
      'One clear monthly report',
      'Guaranteed growth or your money back',
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);
  const activeService = services.find((s) => s.id === activeTab);

  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <div className="section-label">Simple Steps</div>
        <h2 className="section-heading">
          How we help your business 
          <br className="mobile-only" />
          <span className="text-gradient-purple"> grow every month.</span>
        </h2>
        <p className="section-sub">
          You don't need a hundred different marketing tricks. 
          You just need these simple steps done really well.
        </p>

        <div className="services-layout">
          {/* Tabs */}
          <div className="services-tabs">
            {services.map((s) => (
              <button
                key={s.id}
                className={`service-tab ${activeTab === s.id ? 'service-tab--active' : ''}`}
                onClick={() => setActiveTab(s.id)}
              >
                <span className="service-tab-icon">{s.icon}</span>
                <span className="service-tab-name">{s.name}</span>
                {activeTab === s.id && <ChevronRight size={18} className="service-tab-arrow" />}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="service-panel">
            <div className="service-panel-tag" style={{ color: '#A855F7', borderColor: 'rgba(168,85,247,0.3)', background: 'rgba(168,85,247,0.1)' }}>
              {activeService.name}
            </div>
            
            <h3 className="service-panel-title">{activeService.title}</h3>
            
            <div className="service-before-after">
              <div className="service-before">
                <span className="ba-label ba-before">{activeService.before.label}</span>
                {activeService.before.text}
              </div>
              <ChevronRight className="service-arrow-sep" />
              <div className="service-after">
                <span className="ba-label ba-after">{activeService.after.label}</span>
                {activeService.after.text}
              </div>
            </div>

            <ul className="service-bullets">
              {activeService.bullets.map((b, i) => (
                <li key={i}>
                  <span className="bullet-check"><Check size={14} /></span>
                  {b}
                </li>
              ))}
            </ul>

            <a
              href={`https://wa.me/917997001700?text=Hi! I want to know more about your ${activeService.name} system.`}
              target="_blank"
              rel="noreferrer"
              className="service-cta"
            >
              Get this for my business
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
