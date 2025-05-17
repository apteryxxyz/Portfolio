import { inView, animate } from 'motion';

export function doAnimation(
  target: string | Element | NodeListOf<Element>,
  transform: `translate${'X' | 'Y'}(${number}px)`,
  delay: number,
) {
  inView(
    target,
    () =>
      void animate(
        target,
        { opacity: [0, 0.2, 0.8, 1], transform: [transform, 'none'] },
        { duration: 0.5, delay },
      ),
  );
}
