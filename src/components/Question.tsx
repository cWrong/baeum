/** @format */

import { useMDXComponent } from "next-contentlayer/hooks";
import { useState } from "react";
import type { Post } from "@/contentlayer/generated";
import Section from "@/components/Common/Section";
import Flex from "@/components/Common/Flex";
import PostContent from "@/components/Modules/Post/PostContent";

export default function Question({
  post,
}: {
  post: Post | undefined;
}) {
  const [postElement, setPostElement] =
    useState<HTMLElement | null>(null);

  return (
    <Section
      tagName="div"
      maxWidth="768px"
      position="relative"
      margin="0 auto"
      font-size="62.5%"
      
    >
      <Flex
        tagName="div"
        flexDirection="column"
        gap="1.5rem"
        margin="0 0 1.5rem 0"
      >
        <h1 className="flex flex-row justify-center">
          {post?.category} {">"} {post?.title}
        </h1>
        <PostContent
          postContentRef={setPostElement}
          code={post?.body.code || ""}
        />
      </Flex>
    </Section>
  );
}
