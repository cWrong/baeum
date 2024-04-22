/** @format */

"use client";

import { allPosts } from "@/contentlayer/generated";
import type { Post } from "@/contentlayer/generated";
import { Question, Editor, Result, Select } from "@/components";
import React from "react"; // React import
import { Card, Skeleton } from "@nextui-org/react";

type ProblemSearchType = {
  id: string;
  type: string;
};

// mock data
type question = {
  question: string;
  options: string[];
};
const questions: question[] = [
  {
    question: "selective_1",
    options: ["이현서", "심준용", "박상욱", "윤상우", "구본규"],
  },
];

async function getProblem({ id, type }: ProblemSearchType) {
  const mdx_filename = `${type}/${id}`;
  const post: Post | undefined = allPosts.find(
    (post) => post._raw.flattenedPath === mdx_filename
  );

  const question: question | undefined = questions.find(
    ({ question }) => question == `${type}_${id}`
  );

  console.log("question: ", question);
  return { post, question };
}

const ProblemDetailPage = ({ params }: { params: ProblemSearchType }) => {
  const [post, setPost] = React.useState<Post | undefined>();
  const [question, setQuestion] = React.useState<
    question | undefined
  >();

  const [output, setOutput] = React.useState<string>("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const html = document.documentElement;
      html.setAttribute("data-theme", "dark");
    }
  }, []);

  React.useEffect(() => {
    (async () => {
      const { post, question } = await getProblem(params);
      setPost(post);
      setQuestion(question);
    })();
  }, [params]);
  return (
    <div className="flex flex-row max-h-[100%] bg-blue">
      <div
        className="flex-grow-0 flex-shrink-0 max-h-[100%] basis-1/3 p-4 overflow-y-auto scrollbar-hide"
        style={{
          background: "#1f2e3d",
          borderRight: "1px solid #ccc", // 오른쪽 테두리 적용
          backgroundColor: "#1f2e3d", // 배경색
        }}
      >
        {post && <Question post={post} /> }
      </div>
      {params.type === "subjective" && (
        <div className="flex-grow flex-shrink basis-2/3 p-4">
          <Editor />
        </div>
      )}
      {params.type === "selective" && (
        <div className="flex-grow flex-shrink basis-2/3 p-4">
          {question ? (
            <Select question={question} />
          ) : (
            <div>Loading</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProblemDetailPage;
