'use client';

import { animate, inView } from 'motion';
import { useEffect } from 'react';
import { AboutCard } from './_components/about';
import { EducationCard } from './_components/education';
import { LocationCard } from './_components/location';
import { NameCard } from './_components/name';
import { QuoteCard } from './_components/quote';
import { TechnologiesCard } from './_components/technologies';
import { TitleCard } from './_components/title';

export default function AboutContent() {
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    if (!mq.matches) return;

    doAnimation('.AboutCard', 'translateX(-100px)', 0.2);
    doAnimation('.LocationCard', 'translateY(-100px)', 0.2);
    doAnimation('.EducationCard', 'translateX(100px)', 0.3);
    doAnimation('.TechnologiesCard', 'translateY(100px)', 0.4);
    doAnimation('.TitleCard', 'translateY(-100px)', 0.5);
    doAnimation('.QuoteCard', 'translateX(100px)', 0.5);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-rows-6 lg:grid-cols-3 gap-5 p-5">
      <NameCard className="col-span-full lg:col-start-2 lg:col-span-1 lg:row-start-3 lg:row-span-2" />
      <AboutCard className="AboutCard col-span-full lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2 lg:opacity-0" />
      <TitleCard className="TitleCard col-span-full lg:col-start-1 lg:col-span-1 lg:row-start-3 lg:row-span-1 lg:opacity-0" />
      <TechnologiesCard className="TechnologiesCard col-span-full lg:col-start-1 lg:col-span-1 lg:row-start-4 lg:row-span-3 lg:opacity-0" />
      <EducationCard className="EducationCard col-span-full lg:col-start-2 lg:col-span-2 lg:row-start-5 lg:row-span-2 lg:opacity-0" />
      <QuoteCard className="QuoteCard col-span-full lg:col-start-3 lg:col-span-1 lg:row-start-4 lg:row-span-1 lg:opacity-0" />
      <LocationCard className="LocationCard col-span-full lg:col-start-3 lg:col-span-1 lg:row-start-1 lg:row-span-3 lg:opacity-0" />
    </div>
  );
}

function doAnimation(
  elements: NodeListOf<Element> | string,
  transform: `translate${'X' | 'Y'}(${number}px)`,
  delay: number,
) {
  inView(
    elements,
    () =>
      void animate(
        elements,
        { opacity: [0, 0.2, 0.8, 1], transform: [transform, 'none'] },
        { duration: 0.5, delay },
      ),
  );
}
