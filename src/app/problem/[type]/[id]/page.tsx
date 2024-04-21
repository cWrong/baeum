/** @format */

"use client";

import { allPosts } from "@/contentlayer/generated";
import type { Post } from "@/contentlayer/generated";
import { Question, Editor, Result } from "@/components";
import React from "react"; // React import

type ProblemSearchType = {
  id: string;
  type: string;
};

async function getProblem({ id, type }: ProblemSearchType) {
  const mdx_filename = `${type}/${id}`;
  const post: Post | undefined = allPosts.find(
    (post) => post._raw.flattenedPath === mdx_filename
  );
  return post;
}

const ProblemDetailPage = ({ params }: { params: ProblemSearchType }) => {
  const [post, setPost] = React.useState<Post | undefined>();
  const [output, setOutput] = React.useState<string>("");

  React.useEffect(() => {
    (async () => setPost(await getProblem(params)))();
  }, [params]);

  return (
    <div className="grid grid-cols-4 h-screen">
      <div className="col-span-1 bg-gray-100">
        {post && <Question post={post} />}
      </div>
      {params.type === "subjective" && (
        <div className="col-span-3 flex flex-col h-full mr-8 ml-4 space-y-4">
          <Editor />
          <Result output={output} />
        </div>
      )}
    </div>
  );
};

export default ProblemDetailPage;
