/** @format */

"use client";
import React from "react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import {
  getProblemNumbers,
  getProblemIdx,
  getPrevProblemPath,
  getNextProblemPath,
} from "@/utils/problem";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const [idx, setIdx] = useState<number>(1);
  const [probNum, setProbNum] = useState<number>(1);
  const [prevLink, setPrevLink] = useState<string | undefined>(undefined);
  const [nextLink, setNextLink] = useState<string | undefined>(undefined);

  React.useEffect(() => {
    (async () => setProbNum(await getProblemNumbers()))();
    (async () => setIdx(await getProblemIdx(pathname)))();
    (async () => setPrevLink(await getPrevProblemPath(idx)))();
    (async () => setNextLink(await getNextProblemPath(idx)))();
  }, []);

  React.useEffect(() => {
    (async () => setIdx(await getProblemIdx(pathname)))();
  }, [pathname]);

  React.useEffect(() => {
    (async () => setPrevLink(await getPrevProblemPath(idx)))();
    (async () => setNextLink(await getNextProblemPath(idx)))();
  }, [idx]);

  const prevPage = () => {
    if (prevLink != undefined) router.push(prevLink);
  };

  const nextPage = () => {
    if (nextLink != undefined) router.push(nextLink);
  };

  return (
    <section className="flex items-center justify-center gap-4 h-[60px] bg-gray-800 text-white">
      {prevLink === undefined ? (
        <div className="w-20"></div>
      ) : (
        <button
          className="flex items-center justify-center p-2 rounded-md bg-transparent border-transparent hover:bg-gray-100 hover:bg-opacity-10 active:border-0"
          onClick={prevPage}
          disabled={prevLink === undefined ? true : false}
        >
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
            />
          </svg>
          <div className="w-2"></div>
          <p className="text-base">이전</p>
        </button>
      )}
      <span className="flex items-center justify-center gap-2 w-12 font-bold">
        <p>{idx}</p>
        <p>/</p>
        <p>{probNum}</p>
      </span>
      {nextLink === undefined ? (
        <div className="w-20"></div>
      ) : (
        <button
          className="flex items-center justify-center p-2 rounded-md bg-transparent border-transparent hover:bg-gray-100 hover:bg-opacity-10 active:border-0"
          onClick={nextPage}
          disabled={nextLink === undefined ? true : false}
        >
          <p className="text-base">다음</p>
          <div className="w-2"></div>
          <svg
            className="w-6 h-6 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 8 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
            />
          </svg>
        </button>
      )}
    </section>
  );
}
