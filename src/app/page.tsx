import type { Metadata } from 'next/types';
import Balancer from 'react-wrap-balancer';
import { ContactCard } from '@/components/contact-card';
import { LibraryCard } from '@/components/library-card';
import { ProjectCard, ProjectType } from '@/components/project-card';
import { Section } from '@/components/section';

export const metadata = {
  title: 'Apteryx',
  description: 'A full-stack web and mobile app developer.',
} satisfies Metadata;

export default function Page() {
  return (
    <div className="space-y-10">
      <section className="mb-32 mt-20">
        <h1 className="text-4xl font-bold leading-[3rem] text-muted-foreground">
          <Balancer>
            Kia ora! I'm <span>Apteryx</span>, a{' '}
            <span className="text-foreground">full-stack</span>{' '}
            <span className="bg-me-primary/20 text-foreground underline decoration-me-primary decoration-4 underline-offset-8">
              web
            </span>{' '}
            and{' '}
            <span className="bg-me-secondary/20 text-foreground underline decoration-me-secondary decoration-4 underline-offset-8">
              mobile
            </span>{' '}
            developer.
          </Balancer>
        </h1>

        <p className="text-lg font-semibold text-muted-foreground/80">
          <Balancer>
            My name is <span className="text-foreground">Cody</span>, I'm an 18
            year old kiwi and based in{' '}
            <a
              href="https://www.google.com/maps/place/Rotorua/@-38.133835,176.2491698,28677m/data=!3m1!1e3!4m6!3m5!1s0x6d6e983d82f6b22b:0x500ef6143a39931!8m2!3d-38.1445987!4d176.2377669!16zL20vMDF3eDc0?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline"
            >
              Rotorua, Aotearoa
            </a>{' '}
            and I love working with{' '}
            <span className="text-foreground">React</span> and{' '}
            <span className="text-foreground">TypeScript</span>.
          </Balancer>
        </p>
      </section>

      <Section title="Apps I've Made" subtitle="Projects">
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            type={ProjectType.WebApp}
            name="Qwaroo"
            description="Higher or Lower on a whole new level, play one of the many games we have to offer, or create your own and share it with your friends!"
            iconUrl="https://staging.qwaroo.com/icon.svg"
            techologies={[
              'TypeScript',
              'React',
              'Next.js',
              'Tailwind CSS',
              'MongoDB',
            ]}
            createdOn={new Date(1676339340000)}
            deployedUrl="https://qwaroo.com"
          />

          <ProjectCard
            type={[ProjectType.DiscordBot, ProjectType.WebApp]}
            name="Evaluate"
            description="Compile and run code, capture, identify, and save snippets with Evaluate - the ultimate programming bot for Discord!"
            iconUrl="https://japi.rest/discord/v1/user/946755134443102258/avatar"
            techologies={['TypeScript', 'Next.js', 'Primsa']}
            createdOn={new Date(1683841896000)}
            deployedUrl="https://evaluate.apteryx.xyz/invite"
          />

          <ProjectCard
            type={ProjectType.DiscordBot}
            name="Find Fuel"
            description="A former Discord bot that sllowed users to find the cheapest prices for fuel at any service station in any city across 4 different countries."
            iconUrl="https://japi.rest/discord/v1/user/949928190925762580/avatar"
            techologies={['TypeScript']}
            createdOn={new Date('2022-04-27')}
            discontinuedOn={new Date('2022-07-06')}
          />

          <ProjectCard
            type={ProjectType.WebApp}
            name="COVID in NZ"
            description="A former website that scraped COVID-19 related data from the Ministry of Healths website to compile it into a single summarised source."
            iconUrl="https://github.com/covidinnz.png"
            techologies={['TypeScript', 'Next.js']}
            createdOn={new Date('2021-10-08')}
            discontinuedOn={new Date('2022-10-12')}
            sourceUrl="https://github.com/covidinnz/covidinnz-orignal"
          />

          <ProjectCard
            type={ProjectType.MobileApp}
            name="DarkViperAU Soundboard"
            description="A former soundboard app featuring over 80 different sounds DarkViperAU, a popular Twitch streamer, has made."
            iconUrl="https://img.samsungapps.com/productNew/000006111679/IconImage_20220117081753749_NEW_WAP_ICON_512_512.png"
            techologies={['JavaScript', 'React Native', 'Expo']}
            createdOn={new Date('2020-01-14')}
            discontinuedOn={new Date('2022-02-10')}
          />

          <ProjectCard
            type={ProjectType.DiscordBot}
            name="Wolvesville Companion"
            description="A former Discord bot made for the players of Wolvesville, by the players."
            iconUrl="https://github.com/werewolf-companion.png"
            techologies={['JavaScript']}
            sourceUrl="https://github.com/werewolf-companion/werewolf-companion"
            createdOn={new Date('2019-11-13')}
            discontinuedOn={new Date('2021-04-28')}
          />
        </div>
      </Section>

      <Section title="Libraries I've Made" subtitle="Projects">
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <LibraryCard
            name="Enhanced MS"
            description="Convert human readable time-frame strings to milliseconds and back to strings."
            sourceUrl="https://github.com/apteryxxyz/enhanced-ms"
            createdOn={new Date(1615788429408)}
            isMaintained
          />

          <LibraryCard
            name="Next WS"
            description="Add support for WebSockets in Next.js 13 app directory."
            sourceUrl="https://github.com/apteryxxyz/next-ws"
            createdOn={new Date(1685906750690)}
            isMaintained
          />

          <LibraryCard
            name="Next SA"
            description="Improved Next.js 13 server actions, with type-safe validation and timeout."
            sourceUrl="https://github.com/apteryxxyz/next-sa"
            createdOn={new Date(1686301362013)}
          />

          <LibraryCard
            name="JSWhat"
            description="Identify anything. JSWhat - based on PyWhat - lets you easily identify emails, IP addresses, and more. Works in Node, the browser and the command line."
            sourceUrl="https://github.com/apteryxxyz/jswhat"
            createdOn={new Date(1624378628211)}
          />
        </div>
      </Section>

      <Section title="Find Me Online" subtitle="Contact">
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <ContactCard
            method="Email"
            url="mailto:kiaora@apteryx.xyz"
            prefix="kiaora@"
            value="apteryx.xyz"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
            >
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
            </svg>{' '}
          </ContactCard>

          <ContactCard
            method="Discord"
            url="https://discord.com/users/548150274414608399"
            prefix="@"
            value="apteryxxyz"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 640 512"
              height="1em"
              width="1em"
            >
              <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
            </svg>
          </ContactCard>

          <ContactCard
            method="GitHub"
            url="https://github.com/apteryxxyz"
            prefix="@"
            value="apteryxxyz"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              height="1em"
              width="1em"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </ContactCard>

          <ContactCard
            method="Reddit"
            url="https://reddit.com/u/apteryxxyz"
            prefix="u/"
            value="apteryxxyz"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
            >
              <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"></path>
            </svg>
          </ContactCard>
        </div>
      </Section>
    </div>
  );
}
