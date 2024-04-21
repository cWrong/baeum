/** @format */

"use client";
import React from "react";
import { useState } from "react";

export default function Footer() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <section className="flex items-center justify-center gap-4 h-[60px] bg-gray-800 text-white">
      <button className="flex items-center justify-center p-2 rounded-md bg-transparent border-transparent hover:bg-gray-100 hover:bg-opacity-10 active:border-0">
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
      <span className="flex items-center justify-center gap-2 w-12 font-bold">
        <p>1</p>
        <p>/</p>
        <p>4</p>
      </span>
      <button className="flex items-center justify-center p-2 rounded-md bg-transparent border-transparent hover:bg-gray-100 hover:bg-opacity-10 active:border-0">
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
    </section>
  );
}
