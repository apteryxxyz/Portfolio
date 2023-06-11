import Projects from '@/features/projects';

const sections = [{ name: 'projects', component: Projects }];

export default function Page() {
    return <>
        {sections.map(section => <section
            key={section.name}
            id={section.name}
            className="h-screen w-full p-5 md:p-0 md:py-20 container mx-auto space-y-6"
        >
            {section.component()}
        </section>)}
    </>;
}
