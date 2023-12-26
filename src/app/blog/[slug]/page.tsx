import { allPosts } from 'contentlayer/generated';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next/types';
import { Mdx } from '~/components/mdx';
import { PageProps } from '~/types';
import { formatDate } from '~/utilities/format-values';
import { absoluteUrl } from '~/utilities/url-helpers';

function getPostFromParams(p: PageProps<['slug']>) {
  return allPosts.find((post) => post.slug === p.params.slug);
}

export function generateStaticParams() {
  return allPosts.map((post) => ({ params: { slug: post.slug } }));
}

export function generateMetadata(p: PageProps<['slug']>): Metadata {
  const post = getPostFromParams(p);
  if (!post) notFound();

  return {
    title: { absolute: post.title },
    description: post.description,

    openGraph: {
      type: 'article',
      siteName: 'Apteryx',
      title: post.title,
      description: post.description,
      locale: 'en',
      url: absoluteUrl(`/blog/${post.slug}`),
    },

    twitter: {
      card: 'summary',
      creator: '@apteryxxyz',
      title: post.title,
      description: post.description,
    },
  };
}

export default function Page(p: PageProps<['slug']>) {
  const post = getPostFromParams(p);
  if (!post) notFound();

  return (
    <div className="flex gap-6">
      <article className="max-w-4xl">
        <div>
          {post.publishedAt && (
            <time
              dateTime={post.publishedAt}
              className="text-md block text-muted-foreground"
            >
              Published on {formatDate(new Date(post.publishedAt), 'full')}
            </time>
          )}

          <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
            {post.title}
          </h1>
        </div>

        {post.coverImage && (
          <Image
            src={post.coverImage}
            alt={post.title}
            width={720}
            height={405}
            className="rounded-md"
            priority
          />
        )}

        <Mdx>{post.body.code}</Mdx>
      </article>
    </div>
  );
}
