import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { ArrowRight, GraduationCap, Video, FileText, Users } from 'lucide-react';

const AcademyPage = () => {
  useSEO({
    title: 'Digital Marketing Training in Hyderabad | Creativals Academy',
    description: 'Join Creativals Academy in Hyderabad to master advanced digital marketing, SEO, and growth hacking from industry experts. Practical, execution-focused training.',
    keywords: 'digital marketing course hyderabad, seo training hyderabad, performance marketing course hyderabad',
  });

  const waMsg = encodeURIComponent('Hi! I want to join the waitlist for the Creativals Growth Academy.');

  return (
    <div className="dark-page" style={{ background: '#080B14', color: 'white', paddingTop: '80px', minHeight: '100vh' }}>
      
      {/* 1. HERO */}
      <section style={{ padding: '6rem 2rem 4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 1rem', background: 'rgba(234,179,8,0.12)', border: '1px solid rgba(234,179,8,0.3)', borderRadius: '2rem', fontSize: '0.85rem', color: '#FDE047', marginBottom: '2rem' }}>
          <GraduationCap size={14} /> The Growth Academy
        </div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          Learn the math <br />behind the millions.
        </h1>
        <p style={{ fontSize: '1.15rem', color: '#9CA3AF', lineHeight: 1.7 }}>
          An invite-only incubator teaching founders and media buyers the exact Traffic, Conversion, and Automation systems we use to scale Indian enterprises.
        </p>
      </section>

      {/* 2. THE CURRICULUM */}
      <section style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white' }}>The 8-Week Curriculum</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            {
              title: 'Module 1: Audience Calculus',
              icon: Users,
              desc: 'How to bypass iOS14 tracking, implement Server-Side Tagging, and find your most profitable cost-per-acquisition across Meta and Google.',
            },
            {
              title: 'Module 2: Conversion Architecture',
              icon: FileText,
              desc: 'The psychological layout blocks that convert traffic at 20%+. How to build landing pages that make the "Yes" inevitable.',
            },
            {
              title: 'Module 3: Backend Automations',
              icon: Video,
              desc: 'Building zero-delay lead routing via n8n. Setting up WhatsApp API flows to automatically nurture leads for 30 days without human intervention.',
            }
          ].map((mod, i) => (
            <div key={i} style={{ padding: '2.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '1.5rem' }}>
              <div style={{ width: '48px', height: '48px', background: 'rgba(234,179,8,0.1)', color: '#FDE047', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <mod.icon size={24} />
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>{mod.title}</h3>
              <p style={{ color: '#9CA3AF', lineHeight: 1.6, margin: 0 }}>{mod.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CTA */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', background: '#111827', padding: '4rem 2rem', borderRadius: '2rem', border: '1px solid #1F2937' }}>
          <div style={{ color: '#EAB308', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem', fontSize: '0.85rem' }}>Cohort starting Q4 2026</div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem' }}>Join the waitlist.</h2>
          <p style={{ color: '#9CA3AF', marginBottom: '2.5rem', fontSize: '1.1rem' }}>Only 50 operators accepted per cohort.</p>
          <a href={`https://wa.me/917997001700?text=${waMsg}`} target="_blank" rel="noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', background: '#EAB308', color: '#111827', borderRadius: '0.75rem', fontWeight: 800, textDecoration: 'none', fontSize: '1.05rem', transition: 'all 0.2s' }}>
            Get Early Access <ArrowRight size={18} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default AcademyPage;
