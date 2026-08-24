import React from 'react';

interface MarqueeProps {
  text: string;
}

export default function Marquee({ text }: MarqueeProps) {
  const sequence = Array.from({ length: 4 }, () => text);

  return (
    <div className="marquee-wrap" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <span key={copy} className="contents">
            {sequence.map((item, i) => (
              <span key={`${copy}-${i}`} className="marquee-item">
                {item}
                <span className="marquee-dot">●</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
