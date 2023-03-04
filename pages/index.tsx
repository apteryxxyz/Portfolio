import { SiDiscord, SiGithub, SiGmail } from 'react-icons/si';
import { GradientText } from '#/components/Effects/GradientText';
import { ArrowKey } from '#/components/Icon/ArrowKey';
import { InlineLink } from '#/components/Input/InlineLink';
import { Section } from '#/components/Section';
import { PageSeo } from '#/components/Seo/Page';
import {
    Database,
    Engine,
    Framework,
    Language,
    Library,
    Platform,
    Tool,
} from '#/components/TextIcon';

export default function Home() {
    return <>
        <PageSeo
            title="Apteryx"
            description="Apteryx is a software developer from Aotearoa New Zealand."
            url="/"
        />

        <Section
            id="apteryx"
            animateIn="jackInTheBox"
            animationDelay={300}
            animateOnce
        >
            <h1 className="inline [&>*]:!font-extrabold text-7xl lg:text-9xl">
                <GradientText>Apteryx</GradientText>
            </h1>

            <h2 className="font-bold text-2xl lg:text-4xl">
                Software Developer
            </h2>

            <div className="flex gap-5 text-2xl lg:text-3xl [&>*]:!text-red-200">
                <InlineLink
                    to="mailto:kiaora@apteryx.xyz"
                    icon={SiGmail}
                    target="_blank"
                />
                <InlineLink to="/github" icon={SiGithub} target="_blank" />
                <InlineLink to="/discord" icon={SiDiscord} target="_blank" />
            </div>
        </Section>

        <Section
            id="about"
            imageSrc="https://media.discordapp.net/attachments/1063726061914951772/1081291693220966550/kiwi_joy.png"
            animateIn="fadeInUp"
            animateOut="fadeOutUp"
            animateOnce
        >
            <h2 className="font-bold text-2xl">Kia Ora!</h2>

            <p className="drop-shadow-2xl">
                I'm <GradientText>Apteryx</GradientText>, a young software
                developer from Aotearoa New Zealand! I am passionate about
                creating things, whether it's something as simple as a Discord
                bot or a complex full-stack cross-platform application.
            </p>

            <p>
                Although I started my programming journey a while ago, I truly
                got into it during the 2020 lockdown, when I had more time to
                explore and experiment with different technologies. Since then,
                I have honed my skills and gained expertise in various
                programming languages and technologies.
            </p>
        </Section>

        <Section
            id="web"
            animateIn="fadeInUp"
            animateOut="fadeOutUp"
            animateOnce
        >
            <h2 className="font-bold text-2xl">Web Development</h2>

            <p>
                As a full-stack web developer, I am proficient in designing and
                developing dynamic and responsive websites using a variety of
                technologies. I have a strong knowledge of <Language.HTML />,{' '}
                <Language.CSS />, and <Language.JavaScript /> and leverage them
                to create stunning web experiences that engage users.
            </p>

            <p>
                I'm experienced in working with popular frameworks and libraries
                like <Framework.React />, <Framework.NextJS />, and{' '}
                <Library.TailwindCSS />, which allow me to build complex,
                scalable web applications. In fact, I used these technologies to
                create this very website!
            </p>

            <p>
                Currently, my main project is{' '}
                <InlineLink to="https://qwaroo.com">Qwaroo</InlineLink>, a
                quiz/guessing games site where users can play and create custom
                games, like the classic, Higher or Lower.
            </p>
        </Section>

        <Section
            id="bot"
            animateIn="fadeInUp"
            animateOut="fadeOutUp"
            animateOnce
        >
            <h2 className="font-bold text-2xl">Bot Development</h2>

            <p>
                I have a history of creating Discord bots, it being the driving
                force for me to get into programming. I've since created
                numerous bots for a variety of purposes, ranging from moderation
                to entertainment. I created those bots originally using{' '}
                <Language.JavaScript />, now days using <Language.TypeScript />.
            </p>

            <p>
                While I no longer exclusively focus on Discord bot development,
                I remain dedicated to maintaining a few of my existing private
                bots and have plans to create additional ones in the future. In
                fact, I've even developed my own bot framework, called{' '}
                <InlineLink to="https://github.com/apteryxxyz/maclary">
                    Maclary
                </InlineLink>
                , to support my future bot-making endeavors.
            </p>
        </Section>

        <Section
            id="mobile"
            animateIn="fadeInUp"
            animateOut="fadeOutUp"
            animateOnce
        >
            <h2 className="font-bold text-2xl">Mobile Development</h2>

            <p>
                In addition to web development, I have also dabbled in mobile
                development. I have created a few mobile applications using{' '}
                <Framework.ReactNative /> and <Framework.Expo />. However, none
                are currently active/released.
            </p>
        </Section>

        <Section
            id="game"
            animateIn="fadeInUp"
            animateOut="fadeOutUp"
            animateOnce
        >
            <h2 className="font-bold text-2xl">Game Development</h2>

            <p>
                I have reignited my interest in game development and decided to
                explore it further using <Engine.Unity /> and{' '}
                <Language.CSharp />. While I have used <Engine.Unity /> in the
                past, I am now committed to mastering it and delving deeper into
                the world of game development. I'll update this section once I
                have more to share.
            </p>
        </Section>

        <Section
            id="others"
            animateIn="fadeInUp"
            animateOut="fadeOutUp"
            animateOnce
        >
            <h2 className="font-bold text-2xl">Others</h2>

            <p>
                In terms of infrastructure, I am experienced with <Tool.Git />,{' '}
                <Tool.GitHub />, and <Tool.GitHubActions />, which allows me to
                efficiently manage and deploy my projects. I am also familiar
                with <Tool.Docker />, which helps me build and run applications
                in a consistent and reliable way.
            </p>

            <p>
                When it comes to hosting my applications, I use a{' '}
                <Platform.RaspberryPi />, which provides a cost-effective and
                flexible solution for my needs. For web applications, I also use{' '}
                <Tool.NGINX /> as a web server to manage and serve content.
            </p>

            <p>
                In addition, I have some minor experience in other areas of
                software development, such as desktop development using{' '}
                <Language.CPlusPlus /> and the <Engine.Qt /> framework.
            </p>

            <p>
                Lastly, for my database needs, I use <Database.MongoDB />, which
                allows me to store and retrieve data in a scalable and efficient
                manner.
            </p>
        </Section>

        <div className="hidden lg:block fixed p-10 right-0 bottom-0">
            <ArrowKey direction="up" />
            <ArrowKey direction="down" />
        </div>
    </>;
}
