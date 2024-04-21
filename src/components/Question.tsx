
import { useMDXComponent } from 'next-contentlayer/hooks';

import type { Post } from "@/contentlayer/generated";

export default function Question({post}: {post: Post | undefined}) {
  const MDXComponent = useMDXComponent(post?.body.code || '');

  return (
    <div>
      <h1>{post?.title}</h1>
      <span>{post?.category}</span>

      <MDXComponent />
    </div>)
}
