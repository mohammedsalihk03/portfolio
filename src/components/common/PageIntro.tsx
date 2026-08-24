import React from 'react';
import Reveal from './Reveal';

interface PageIntroProps {
  kicker?: string;
  title: string;
  description?: string;
}

export default function PageIntro({ kicker, title, description }: PageIntroProps) {
  return (
    <Reveal className="page-intro">
      {kicker && <p className="section-kicker">{kicker}</p>}
      <h1 className="page-title">{title}</h1>
      {description && <p className="page-lede">{description}</p>}
    </Reveal>
  );
}
