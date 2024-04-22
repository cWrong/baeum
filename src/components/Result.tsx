/** @format */
//@ts-nocheck
"use client";

import React from "react";

import { useState } from "react";
import { Box, Button, Text, useToast } from "@chakra-ui/react";

const Result = ({ editorRef, language }) => {
  const toast = useToast();
  const [output, setOutput] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // const runCode = async () => {
  //   const sourceCode = editorRef.current.getValue();
  //   if (!sourceCode) return;
  //   try {
  //     setIsLoading(true);
  //     const { run: result } = await executeCode(language, sourceCode);
  //     setOutput(result.output.split("\n"));
  //     result.stderr ? setIsError(true) : setIsError(false);
  //   } catch (error) {
  //     console.log(error);
  //     toast({
  //       title: "An error occurred.",
  //       description: error.message || "Unable to run code",
  //       status: "error",
  //       duration: 6000,
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  return (
    <Box w="100%">
      <div className="flex justify-between items-center mb-4">
        <Text mb={2} fontSize="lg" className="text-white-dark">
          실행 결과
        </Text>
        <div className="flex space-x-2">
          <button className="bg-blue-light text-black py-2 px-4 rounded">
            저장
          </button>
          <button className="bg-blue-light text-black py-2 px-4 rounded">
            실행
          </button>
        </div>
      </div>
      <Box
        height="10vh"
        p={2}
        color={isError ? "red.400" : "#adb5bd"}
        border="1px solid"
        borderRadius={4}
        borderColor={isError ? "red.500" : "#fff"}
      >
        {output
          ? output.map((line, i) => <Text key={i}>{line}</Text>)
          : "실행을 눌러 결과를 확인하세요"}
      </Box>
    </Box>
  );
};
export default Result;
