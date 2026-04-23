import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const FounderVideo = () => (
  <section style={{ padding: 'clamp(4rem,8vw,8rem) 0', background: '#0a0a0a', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
    <style>{`
      .fv-wrap {
        position: relative; zIndex: 1;
        width: 100%; max-width: 1280px;
        margin: 0 auto;
        padding: 0 clamp(1.25rem, 5vw, 4rem);
      }
      .fv-grid {
        display: grid;
        grid-template-columns: minmax(0,1fr) minmax(0,1.2fr);
        gap: 5rem;
        align-items: center;
      }
      .fv-video {
        position: relative;
        width: 100%;
        border-radius: 1.5rem;
        overflow: hidden;
        box-shadow: 0 25px 50px -12px rgba(124,58,237,0.3);
        border: 1px solid rgba(124,58,237,0.2);
        background-color: #111827;
        aspect-ratio: 16/9;
      }
      .fv-headline {
        color: white;
        font-size: clamp(2rem, 4.5vw, 3.5rem);
        font-weight: 800;
        line-height: 1.1;
        margin-bottom: 1.25rem;
        letter-spacing: -0.02em;
      }
      .fv-body {
        color: #9CA3AF;
        font-size: clamp(1rem, 2vw, 1.2rem);
        line-height: 1.6;
        margin: 0 0 2rem;
      }
      .fv-cta {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: #22C55E;
        color: white;
        padding: 1.1rem 2rem;
        border-radius: 0.75rem;
        text-decoration: none;
        transition: background 0.2s, transform 0.2s;
        font-weight: 700;
        font-size: 1rem;
        box-shadow: 0 4px 14px 0 rgba(34,197,94,0.39);
        width: 100%;
        max-width: 360px;
      }
      .fv-cta:hover { background: #16a34a; transform: translateY(-2px); }
      .fv-badges {
        display: flex;
        gap: 1.5rem;
        color: #6B7280;
        font-size: 0.9rem;
        font-weight: 600;
        flex-wrap: wrap;
      }
      @media (max-width: 860px) {
        .fv-grid {
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        .fv-grid > div:last-child {
          order: -1;
        }
        .fv-headline {
          font-size: clamp(1.9rem, 7vw, 2.6rem);
        }
      }
      @media (max-width: 480px) {
        .fv-cta {
          max-width: 100%;
          font-size: 0.95rem;
          padding: 1rem 1.5rem;
        }
        .fv-badges {
          gap: 1rem;
          font-size: 0.82rem;
        }
      }
    `}</style>

    {/* Background glow */}
    <div style={{ position: 'absolute', top: '50%', right: '0%', transform: 'translate(50%, -50%)', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, rgba(10,10,10,0) 70%)', zIndex: 0, pointerEvents: 'none' }} />

    <div className="fv-wrap" style={{ position: 'relative', zIndex: 1 }}>
      <div className="fv-grid">

        {/* Left: Text */}
        <div>
          <div className="section-label" style={{ color: '#34D399', background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.2)', marginBottom: '1.25rem' }}>
            A Quick Message
          </div>

          <h2 className="fv-headline">
            Watch this before you{' '}
            <span className="text-gradient-purple">book your audit.</span>
          </h2>

          <p className="fv-body">
            We are real people building systems for real businesses. No ghosting. No hidden fees. Just results.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '1.25rem' }}>
            <a
              href="https://wa.me/917997001700?text=Hi! I just watched the video and I want to talk."
              target="_blank"
              rel="noreferrer"
              className="fv-cta"
            >
              I've Seen Enough. Let's Talk. <ArrowRight size={17} style={{ marginLeft: '0.5rem', flexShrink: 0 }} />
            </a>

            <div className="fv-badges">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={15} color="#10B981" /> 100% Free Strategy
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <CheckCircle2 size={15} color="#10B981" /> Talk to a real expert
              </span>
            </div>
          </div>
        </div>

        {/* Right: Video */}
        <div className="fv-video">
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
