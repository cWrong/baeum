/** @format */
import { allPosts } from "@/contentlayer/generated";
import type { Post } from "@/contentlayer/generated";
import { Question, Editor } from "@/components";
import type { GetServerSideProps } from "next";

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

export default async function ProblemDetailPage({
  params,
}: {
  params: ProblemSearchType;
}) {
  const post: Post | undefined = await getProblem(params);

  return (
    <>
      <div className="bg-white">
        <Question post={post} />
        {params.type === "subjective" && (
          <div>
            <Editor />
            <div>실행, 저장</div>
          </div>
        )}
      </div>
    </>
  );
}
