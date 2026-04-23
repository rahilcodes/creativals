import React from 'react';

// 45 cols x 20 rows
const MAP_MATRIX = [
  "                                             ",
  "        xxxx                                 ",
  "       xxxxxx         xxxxxx    xx  xx       ",
  "      xxxxxxxx       xxxxxxxxxxxxxxxxxx      ",
  "     xxxxxxxxxx     xxxxxxxxxxxxxxxxxxxx     ",
  "     xxxxxxxxxx     xxxxxxxxxxxxxxxxxxxx x   ",
  "      xxxxxxxx       xxxxxxxxxxxxxxxxxx xx   ",
  "       xxxxxx         xxxxxxxxxxxxxxxx       ",
  "        xxxx           xxxxxxxxxxxxxx        ",
  "         xx             xxxxxxxxxxx          ",
  "         xx              xxxxxxxxx     x     ",
  "         x                xxxxxxx     xxx    ",
  "          x                xxxxx     xxxxx   ",
  "          x                 xxx       xxx    ",
  "                                       x     ",
  "                                             ",
  "                                             ",
];

// Map office coordinates to the matrix grid (row, col)
const OFFICES = [
  { city: 'Hyderabad', code: 'IN', r: 8,  c: 32, color: '#A855F7' },
  { city: 'Florida',   code: 'US', r: 5,  c: 8,  color: '#38BDF8' },
  { city: 'Vancouver', code: 'CA', r: 3,  c: 6,  color: '#F97316' },
  { city: 'Dubai',     code: 'AE', r: 7,  c: 28, color: '#EC4899' },
  { city: 'Kuala Lumpur', code: 'MY', r: 10, c: 35, color: '#22C55E' },
  { city: 'Sydney',    code: 'AU', r: 13, c: 41, color: '#F59E0B' },
];

const WorldMapGrid = () => {
  const rows = MAP_MATRIX.length;
  const cols = MAP_MATRIX[0].length;
  const width = 220;
  const height = 110;
  
  const stepX = width / cols;
  const stepY = height / rows;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: '#F8FAFC' }}>
      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '100%', display: 'block' }}>
        <rect width={width} height={height} fill="#0A0A12" />
        
        {/* Draw the dot matrix */}
        {MAP_MATRIX.map((rowStr, r) => 
          rowStr.split('').map((char, c) => {
            if (char === 'x') {
              return (
                <circle 
                  key={`${r}-${c}`} 
                  cx={c * stepX + stepX / 2} 
                  cy={r * stepY + stepY / 2} 
                  r="1.25" 
                  fill="rgba(255,255,255,0.08)" 
                />
              );
            }
            return null;
          })
        )}

        {/* Draw the offices (pulsing glowing dots) */}
        {OFFICES.map(o => {
          const cx = o.c * stepX + stepX / 2;
          const cy = o.r * stepY + stepY / 2;
          return (
            <g key={o.city}>
              <circle cx={cx} cy={cy} r="6" fill={o.color} opacity="0.25">
                <animate attributeName="r" values="4;8;4" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3" dur="2.5s" repeatCount="indefinite" />
              </circle>
              <circle cx={cx} cy={cy} r="2" fill={o.color} />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export { WorldMapGrid, OFFICES };
