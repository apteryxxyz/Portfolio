import { useRef } from 'react';
import { useEventListener } from '#/hooks/useEventListener';

export function MouseLight() {
    const lightRef = useRef<HTMLDivElement>(null);

    useEventListener('mousemove', ({ clientX, clientY }: MouseEvent) => {
        setTimeout(() => {
            if (lightRef.current) {
                lightRef.current.style.left = `${clientX}px`;
                lightRef.current.style.top = `${clientY}px`;
            }
        }, 130);
    });

    return <div
        ref={lightRef}
        className="fixed z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
        <div
            className="h-96 aspect-square rounded-full
                bg-gradient-to-r from-orange-500 to-red-500 blur-3xl
                opacity-20 animate-wrap-spin"
        />
    </div>;
}
