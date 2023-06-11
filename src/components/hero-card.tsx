import { GithubIcon, TwitterIcon, YoutubeIcon } from 'lucide-react';
import Image from 'next/image';
import { Balancer } from 'react-wrap-balancer';
import { DiscordIcon } from './discord-icon';

export default function HeroCard() {
    return <div className="flex gap-6 items-center justify-center max-w-[450px]">
        <Image
            className="rounded-full w-28 h-28 border-2 bg-green-800 border-green-900"
            src="https://github.com/apteryxxyz.png"
            height={85}
            width={85}
            alt="Apteryx's GitHub profile picture"
        />

        <div>
            <div className="space-x-1">
                <p className="inline text-lg font-bold">Cody</p>
                <p className="inline text-sm font-light text-opacity-70">
                    (apteryxxyz)
                </p>
            </div>

            <p className="text-sm font-normal">
                <Balancer>
                    Kia ora! I make websites, apps, games, bots and stuff.
                </Balancer>
            </p>

            <div className="flex gap-2 mt-1">
                <a
                    className="transition-transform hover:scale-105"
                    href="https://github.com/apteryxxyz"
                >
                    <GithubIcon />
                    <span className="sr-only">GitHub</span>
                </a>

                <a
                    className="transition-transform hover:scale-105"
                    href="https://twitter.com/apteryxxyz"
                >
                    <TwitterIcon />
                    <span className="sr-only">Twitter</span>
                </a>

                <a
                    className="transition-transform hover:scale-105"
                    href="https://discord.gg/vZQbMhwsKY"
                >
                    <DiscordIcon />
                    <span className="sr-only">Discord</span>
                </a>

                <a
                    className="transition-transform hover:scale-105"
                    href="https://youtube.com/apteryx"
                >
                    <YoutubeIcon />
                    <span className="sr-only">Discord</span>
                </a>
            </div>
        </div>
    </div>;
}
