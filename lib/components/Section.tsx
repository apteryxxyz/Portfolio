import { AnimationOnScroll } from 'react-animation-on-scroll';
import { ImageCard } from './Card/Image';

export function Section(props: Section.Props) {
    return <section
        id={props.id}
        className={`h-screen w-full snap-start px-[10%] flex items-center justify-center`}
    >
        <AnimationOnScroll
            animateIn={'animate__' + (props.animateIn ?? 'fadeIn')}
            animateOut={'animate__' + (props.animateOut ?? 'fadeOut')}
            animateOnce={props.animateOnce ?? false}
            delay={props.animationDelay ?? 0}
            className={`flex flex-col lg:flex-row gap-10
            ${props.className ?? ''}`.replaceAll(/\s+/g, ' ')}
        >
            <div className="flex flex-col gap-5 text-lg font-medium lg:w-[60vh]">
                {props.children}
            </div>

            {props.imageSrc && <ImageCard
                src={props.imageSrc}
                alt={props.imageAlt}
                className="hidden lg:block lg:w-[40vh]"
            />}
        </AnimationOnScroll>
    </section>;
}

export namespace Section {
    export interface Props {
        id?: string;
        className?: string;
        children: React.ReactNode | React.ReactNode[];

        imageSrc?: string;
        imageAlt?: string;
        imageSide?: 'left' | 'right';

        animateIn?: string;
        animateOut?: string;
        animateOnce?: boolean;
        animationDelay?: number;
    }
}
