/** @format */

"use client";

import { allPosts } from "@/contentlayer/generated";
import type { Post } from "@/contentlayer/generated";
import { Question, Editor, Result, Select } from "@/components";
import React from "react"; // React import
import {getProblem, ProblemSearchType, QuestionType} from "@/utils/problem"
import { Card, Skeleton } from "@nextui-org/react";

const ProblemDetailPage = ({ params }: { params: ProblemSearchType }) => {
  const [post, setPost] = React.useState<Post | undefined>();
  const [question, setQuestion] = React.useState<
  QuestionType | undefined
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
