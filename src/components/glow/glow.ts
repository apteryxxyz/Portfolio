'use client';

import { useEventListener } from '~/hooks/use-event-listener';
import './glow.css';

export function Glow() {
  useEventListener('pointermove', ({ x, y }) => {
    document.documentElement.style.setProperty('--mouse-x', x.toFixed(2));
    document.documentElement.style.setProperty('--mouse-y', y.toFixed(2));
  });

  return null;
}
