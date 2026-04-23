import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const FounderVideo = () => (
  <section style={{ minHeight: '100vh', padding: '8rem 0', background: '#0a0a0a', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
    {/* Dark dramatic background glow */}
    <div style={{ position: 'absolute', top: '50%', right: '0%', transform: 'translate(50%, -50%)', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(10,10,10,0) 70%)', zIndex: 0 }} />
    
    <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1280px', margin: '0 auto' }}>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '6rem', alignItems: 'center' }}>
        
        {/* Left: Text Hook */}
        <div>
          <div className="section-label" style={{ color: '#34D399', background: 'rgba(16, 185, 129, 0.1)', borderColor: 'rgba(16, 185, 129, 0.2)', marginBottom: '1.5rem' }}>
            A Quick Message
          </div>
          <h2 style={{ color: 'white', fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
            Watch this before you <br />
            <span className="text-gradient-purple">book your audit.</span>
          </h2>
          <p style={{ color: '#9CA3AF', fontSize: '1.2rem', lineHeight: 1.6, margin: '0 0 2.5rem' }}>
            We are real people building systems for real businesses. No ghosting. No hidden fees. Just results.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem' }}>
            <a 
              href="https://wa.me/917997001700?text=Hi! I just watched the video and I want to talk."
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#22C55E', color: 'white', padding: '1.25rem 2.5rem', borderRadius: '0.75rem', textDecoration: 'none', transition: 'background 0.2s', fontWeight: 700, fontSize: '1.05rem', boxShadow: '0 4px 14px 0 rgba(34, 197, 94, 0.39)' }}
            >
              I've Seen Enough. Let's Talk. <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
            </a>
            
            <div style={{ display: 'flex', gap: '1.5rem', color: '#6B7280', fontSize: '0.95rem', fontWeight: 600 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#10B981" /> 100% Free Strategy
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#10B981" /> Talk to a real expert
              </span>
            </div>
          </div>
        </div>

        {/* Right: Looping Auto-playing Video */}
        <div className="hover-up" style={{ position: 'relative', width: '100%', borderRadius: '1.5rem', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(124,58,237,0.3)', border: '1px solid rgba(124,58,237,0.2)', backgroundColor: '#111827' }}>
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            controlsList="nodownload nofullscreen noremoteplayback"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }}
            poster="/logo.webp"
          >
            <source src="/creativals.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </div>
  </section>
);

export default FounderVideo;
