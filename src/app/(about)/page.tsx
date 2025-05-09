'use client';

import { animate, inView } from 'motion';
import { useEffect } from 'react';
import { AboutCard } from './about';
import { EducationCard } from './eduction';
import { LocationCard } from './location';
import { NameCard } from './name';
import { QuoteCard } from './quote';
import { TechnologiesCard } from './technologies';
import { TitleCard } from './title';

export default function AboutPage() {
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    if (!mq.matches) return;

    doAnimation('#about', 'translateX(-100px)', 0.3);
    doAnimation('#title', 'translateY(-100px)', 0.1);
    doAnimation('#technologies', 'translateY(100px)', 0.3);
    doAnimation('#education', 'translateX(100px)', 0.4);
    doAnimation('#quote', 'translateY(100px)', 0.2);
    doAnimation('#location', 'translateY(-100px)', 0.1);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-5 overflow-hidden p-5 lg:grid-cols-3 lg:grid-rows-6">
      <NameCard className="col-span-full lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-3" />
      <AboutCard
        id="about"
        className="col-span-full lg:col-span-2 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:scripting:opacity-0"
      />
      <TitleCard
        id="title"
        className="col-span-full lg:col-span-1 lg:col-start-1 lg:row-span-1 lg:row-start-3 lg:scripting:opacity-0"
      />
      <QuoteCard
        id="quote"
        className="col-span-full lg:col-span-1 lg:col-start-3 lg:row-span-1 lg:row-start-4 lg:scripting:opacity-0"
      />
      <TechnologiesCard
        id="technologies"
        className="col-span-full lg:col-span-1 lg:col-start-1 lg:row-span-3 lg:row-start-4 lg:scripting:opacity-0"
      />
      <EducationCard
        id="education"
        className="col-span-full lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-5 lg:scripting:opacity-0"
      />
      <LocationCard
        id="location"
        className="col-span-full lg:col-span-1 lg:col-start-3 lg:row-span-3 lg:row-start-1 lg:scripting:opacity-0"
      />
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
