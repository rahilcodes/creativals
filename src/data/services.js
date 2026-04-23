// Creativals — Central Service Data (30 services)
// Each service feeds into the 12-section ServicePageTemplate

const services = [
  // ──────────── MARKETING & GROWTH ────────────
  {
    slug: 'paid-social-ads',
    title: 'Paid Social Ads',
    category: 'Marketing & Growth',
    metaTitle: 'Paid Social Ads — Creativals | Meta & Instagram Ad Systems India',
    metaDesc: 'Stop wasting ad spend. Creativals builds paid social systems on Meta, Instagram & LinkedIn that generate qualified leads — not vanity metrics.',
    heroHeadline: 'Your ads aren\'t failing.\nYour system is.',
    heroSub: 'We build paid social systems that turn ad spend into qualified leads — not likes, not followers, not impressions.',
    metrics: [
      { value: '3.5x', label: 'Average ROAS' },
      { value: '₹85', label: 'Avg Cost Per Lead' },
      { value: '200%', label: 'Lead Growth in 60 Days' },
    ],
    failReasons: [
      { title: 'No targeting system', desc: 'Running broad audiences with no segmentation or retargeting funnel.' },
      { title: 'No follow-up', desc: 'Getting leads but never converting them because there\'s no WhatsApp or CRM automation.' },
      { title: 'Wrong metrics', desc: 'Optimizing for clicks and reach instead of cost-per-qualified-lead.' },
    ],
    systemApproach: 'We don\'t "run ads." We build a closed-loop acquisition system: audience research → creative testing → funnel qualification → WhatsApp closing.',
    systemSteps: [
      { step: 'Audience Engineering', desc: 'We map your ideal customer using data — not guesswork. Custom audiences, lookalikes, interest stacking.' },
      { step: 'Creative Testing', desc: '5-10 ad variations tested weekly. We kill losers fast and scale winners.' },
      { step: 'Funnel Qualification', desc: 'Leads hit a landing page that filters intent before they reach your inbox.' },
      { step: 'WhatsApp Closing', desc: 'Qualified leads get a pre-filled WhatsApp message. Your team closes — we set up the system.' },
    ],
    industries: [
      { name: 'Hotels & Resorts', result: '+180% direct bookings' },
      { name: 'Education', result: '4x more enrolments' },
      { name: 'E-Commerce', result: '3.5x average ROAS' },
    ],
    caseStudies: [
      { client: 'Royal Palm Resorts', before: '12 bookings/mo', after: '68 bookings/mo', system: 'Meta Ads + Booking Funnel' },
      { client: 'Pinnacle Academy', before: '47 leads/mo', after: '210 leads/mo', system: 'Facebook Lead Ads + WhatsApp' },
    ],
    outcomes: [
      'Fully managed ad campaigns across Meta, Instagram, LinkedIn',
      'Weekly creative refresh with performance-tested variants',
      'WhatsApp-integrated lead capture funnels',
      'Real-time dashboard with cost-per-lead tracking',
      'Monthly strategy call + performance report',
    ],
    mechanism: 'Social ads work when they\'re part of a system. Traffic alone is worthless. We connect ad spend → landing page → lead qualification → WhatsApp closing into one automated pipeline. That\'s why our clients consistently see 3x+ ROAS.',
    faqs: [
      { q: 'How much should I spend on social ads?', a: 'We recommend a minimum of ₹30,000/month in ad spend for meaningful data. Our management fee is separate. We\'ll tell you the exact budget during your free audit.' },
      { q: 'Which platforms do you run ads on?', a: 'Primarily Meta (Facebook + Instagram) and LinkedIn. We choose the platform based on where your customers actually are — not trends.' },
      { q: 'How fast will I see results?', a: 'Most clients see their first qualified leads within 7-14 days. Stable, optimized performance typically hits by Day 30-45.' },
      { q: 'Do you handle the creatives?', a: 'Yes. We design all ad creatives, write all copy, and test multiple variants weekly. You approve the direction — we handle execution.' },
      { q: 'What makes you different from other ad agencies?', a: 'We don\'t stop at running ads. We build the full system — landing page, WhatsApp automation, CRM handoff. Most agencies give you leads. We give you customers.' },
    ],
    relatedServices: ['google-ads-ppc', 'lead-generation-funnels', 'conversion-optimization'],
  },
  {
    slug: 'google-ads-ppc',
    title: 'Google Ads & PPC',
    category: 'Marketing & Growth',
    metaTitle: 'Google Ads & PPC — Creativals | Search & Display Ad Systems India',
    metaDesc: 'Capture high-intent buyers on Google. Creativals builds PPC systems that target people actively searching for your service — and converts them on WhatsApp.',
    heroHeadline: 'People are searching for you.\nRight now.',
    heroSub: 'We capture high-intent traffic on Google Search and convert them into WhatsApp conversations — before your competitors do.',
    metrics: [
      { value: '4.2x', label: 'Average ROAS' },
      { value: '₹62', label: 'Avg Cost Per Lead' },
      { value: 'Top 3', label: 'Ad Position Consistently' },
    ],
    failReasons: [
      { title: 'Broad match chaos', desc: 'Wasting budget on irrelevant searches because no one set up proper negative keywords.' },
      { title: 'No landing page', desc: 'Sending paid traffic to your homepage instead of a focused conversion page.' },
      { title: 'Set and forget', desc: 'Running the same campaign for months with zero optimization or testing.' },
    ],
    systemApproach: 'We build intent-capture systems: keyword research → ad copy testing → dedicated landing pages → call/WhatsApp conversion tracking.',
    systemSteps: [
      { step: 'Keyword Architecture', desc: 'Deep keyword research with commercial intent focus. Negative keyword shields to block waste.' },
      { step: 'Ad Copy Engineering', desc: 'Multiple responsive search ad variants tested against each other. Headline optimization every 2 weeks.' },
      { step: 'Landing Page Funnel', desc: 'Dedicated pages built for each campaign — not your homepage. Designed to convert.' },
      { step: 'Conversion Tracking', desc: 'Every call, form, WhatsApp click tracked and attributed to exact keyword.' },
    ],
    industries: [
      { name: 'Healthcare', result: '2.8x appointment bookings' },
      { name: 'Real Estate', result: '3x site visit bookings' },
      { name: 'Professional Services', result: '5x qualified leads' },
    ],
    caseStudies: [
      { client: 'City Dental Clinic', before: '8 appointments/mo', after: '34 appointments/mo', system: 'Google Search Ads + Booking Page' },
      { client: 'Horizon Realty', before: '₹4,200/lead', after: '₹890/lead', system: 'PPC + WhatsApp Bot' },
    ],
    outcomes: [
      'Fully managed Google Search & Display campaigns',
      'Custom landing pages per campaign/keyword group',
      'Call tracking + WhatsApp click attribution',
      'Negative keyword management (weekly)',
      'Bi-weekly optimization cycle + monthly report',
    ],
    mechanism: 'Google Ads capture people who are already searching for what you sell. The key is matching intent to offer. We build keyword → ad → landing page → closing pipelines that convert search intent into revenue.',
    faqs: [
      { q: 'How much budget do I need for Google Ads?', a: 'Minimum ₹25,000/month in ad spend for local campaigns. ₹50,000+ for competitive markets. We\'ll give you exact numbers in the free audit.' },
      { q: 'How is this different from SEO?', a: 'Google Ads gives you immediate visibility. SEO is a long-term play. We recommend both — ads for quick wins, SEO for compounding growth.' },
      { q: 'Do you manage the Google Ads account directly?', a: 'Yes. We own the campaign management end-to-end — keyword research, ad writing, bid strategy, landing pages, and reporting.' },
      { q: 'Can I track which keywords bring customers?', a: 'Absolutely. We set up full conversion tracking so you know exactly which keyword → ad → page → WhatsApp click brought each lead.' },
      { q: 'What if I\'ve been burned by Google Ads before?', a: 'Most failed Google Ads campaigns have the same root cause: no landing page, broad keywords, and no tracking. We fix all three from Day 1.' },
    ],
    relatedServices: ['paid-social-ads', 'search-engine-optimization', 'landing-pages'],
  },
  {
    slug: 'search-engine-optimization',
    title: 'Search Engine Optimization (SEO)',
    category: 'Marketing & Growth',
    metaTitle: 'SEO Services — Creativals | Organic Growth Systems for Indian Businesses',
    metaDesc: 'Rank on Google. Get discovered by customers searching for your service. Creativals builds SEO systems that compound traffic month over month.',
    heroHeadline: 'Stop renting traffic.\nOwn it.',
    heroSub: 'We build SEO systems that put you on Page 1 of Google — so customers find you, not your competitors.',
    metrics: [
      { value: '312%', label: 'Avg Organic Traffic Growth' },
      { value: 'Page 1', label: 'Rankings in 90 Days' },
      { value: '₹0', label: 'Cost Per Click (Organic)' },
    ],
    failReasons: [
      { title: 'No content strategy', desc: 'Publishing random blog posts with no keyword targeting or intent matching.' },
      { title: 'Technical debt', desc: 'Slow site speed, broken links, no schema markup — Google can\'t properly crawl your site.' },
      { title: 'Expecting overnight results', desc: 'SEO compounds over time. Most agencies don\'t explain this and get fired in 2 months.' },
    ],
    systemApproach: 'We build organic acquisition infrastructure: technical audit → keyword mapping → content engine → link building → conversion optimization.',
    systemSteps: [
      { step: 'Technical Audit', desc: 'Full crawl analysis: speed, mobile, schema, indexing issues. Fix the foundation first.' },
      { step: 'Keyword Mapping', desc: 'Map high-intent commercial keywords to specific pages. Build content clusters.' },
      { step: 'Content Engine', desc: 'SEO-optimized pages and articles published on a consistent schedule with internal linking.' },
      { step: 'Authority Building', desc: 'Strategic backlink acquisition from relevant Indian sites and directories.' },
    ],
    industries: [
      { name: 'Hotels & Resorts', result: 'Page 1 for "resorts in Goa"' },
      { name: 'Education', result: '300% organic traffic growth' },
      { name: 'E-Commerce', result: '45% reduction in paid ad dependency' },
    ],
    caseStudies: [
      { client: 'Wellness Retreat Co.', before: '120 organic visits/mo', after: '1,840 organic visits/mo', system: 'Technical SEO + Content Strategy' },
      { client: 'Bright Future Academy', before: 'Page 5+', after: 'Page 1, Position 3', system: 'Local SEO + GBP Optimization' },
    ],
    outcomes: [
      'Full technical SEO audit and fix implementation',
      'Keyword-targeted content calendar (monthly)',
      'On-page optimization for all key pages',
      'Google Search Console + Analytics reporting',
      'Monthly ranking and traffic reports',
    ],
    mechanism: 'SEO is the only marketing channel where traffic compounds for free. Every page you rank is a permanent lead source. We build the technical foundation, target commercial keywords, and create content that Google rewards.',
    faqs: [
      { q: 'How long does SEO take to show results?', a: '3-6 months for meaningful rankings. SEO is a long-term play — but once it works, you get leads for free forever.' },
      { q: 'Do you write the content?', a: 'Yes. Our content team writes keyword-optimized articles, landing pages, and service pages — all based on search intent data.' },
      { q: 'Is SEO still worth it in 2025?', a: 'More than ever. With rising ad costs, organic traffic is the most profitable long-term channel. Our clients save 40-60% on paid ads once SEO kicks in.' },
      { q: 'Do you do local SEO?', a: 'Yes. We optimize your Google Business Profile, build local citations, and target "near me" searches for your city.' },
      { q: 'Will I own the content you create?', a: '100%. Everything we publish on your site is yours permanently.' },
    ],
    relatedServices: ['local-maps-gbp', 'google-ads-ppc', 'custom-websites'],
  },
];

export default services;
