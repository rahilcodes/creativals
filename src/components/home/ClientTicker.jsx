import React from 'react';
import { Marquee } from '../ui/primitives';

const WINS = [
  'Glampinn Valley — ₹50 Cr revenue',
  'Teak Studio — ₹30 Cr revenue',
  'Hotel Sky Intl — revenue 2x in 6 mo',
  'MRA Motors — 50M views',
  'Pista House — 200% order growth',
  'Gopuppy — ₹15 Cr revenue',
  'Mahindra — 500+ monthly leads',
  'GMR Group — 3-year partner',
];

const ClientTicker = () => (
  <div style={{ background: '#FFD84D', color: '#17151A', borderTop: '2px solid #17151A', borderBottom: '2px solid #17151A' }}>
    <Marquee speed={30} segStyle={{ gap: 36, paddingRight: 36, fontFamily: "'IBM Plex Mono',monospace", fontSize: 13.5, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', padding: '15px 36px 15px 0' }}>
      {WINS.map((w) => (
        <React.Fragment key={w}>
          <span>{w}</span><span>◆</span>
        </React.Fragment>
      ))}
    </Marquee>
  </div>
);

export default ClientTicker;
