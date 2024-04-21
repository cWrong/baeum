/** @format */

"use client";

import React from "react";

export default function Result({ output }: { output: String }) {
  return (
    <section className="p-4 bg-gray-100 rounded-lg shadow-md grow flex flex-col">
      <h2 className="text-lg font-semibold text-gray-700">
        실행 결과
      </h2>
      <div className="mt-2 mb-2 p-3 bg-white rounded text-gray-800 font-mono text-sm leading-relaxed grow">
        {output ? output : "실행 결과 없음"}
      </div>
    </section>
  );
}
