import { allPosts } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next/types';
import Balancer from 'react-wrap-balancer';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/components/ui/card';
import { formatDate } from '~/utilities/format-values';

export const metadata: Metadata = {
  title: 'Blog Posts by Apteryx',
  description:
    'A full-stack web and mobile app developer that writes about my experiences, projects, guides, tutorials, and things that I find interesting.',
};

export default function Page() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)),
  );

  return (
    <>
      <div className="mx-auto my-44 w-[66%] space-y-4 text-center">
        <h1 className="text-center text-4xl font-bold md:text-6xl">
          <Balancer>My Bytes of Insight.</Balancer>
        </h1>

        <p className="text-center font-semibold text-muted-foreground md:text-lg">
          <Balancer>
            I write about my experiences, projects, guides, tutorials, and
            things that I find interesting.
            {posts.length === 0 && (
              <>
                {' '}
                There are no posts yet, but you're welcome to suggest a topic!
              </>
            )}
          </Balancer>
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post, index) => (
          <Card key={post._id} className="relative text-left">
            {post.coverImage && (
              <Image
                src={post.coverImage}
                alt={post.title}
                width={804}
                height={452}
                className="rounded-md border bg-muted transition-colors"
                priority={index <= 1}
              />
            )}

            <CardHeader>
              <CardTitle>{post.title}</CardTitle>

              <CardDescription>
                {post.description}
                <time dateTime={post.publishedAt} className="mt-1 block">
                  {formatDate(new Date(post.publishedAt), 'full')}
                </time>
              </CardDescription>

              <Link href={`/blog/${post.slug}`} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
