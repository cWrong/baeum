/** @format */
//@ts-nocheck

"use client";
import { useRef, useState } from "react";
import Editor from "@monaco-editor/react"; // 가정한 에디터 컴포넌트 임포트
import { Box, HStack } from "@chakra-ui/react";
import { CODE_SNIPPETS } from "@/constant/constant";
import { LanguageSelector } from "@/components";

export default function EditorComp() {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <HStack spacing={4}>
        <Box w="100%">
          <LanguageSelector
            language={language}
            onSelect={onSelect}
          />
          <Editor
            options={{
              minimap: {
                enabled: false,
              },
            }}
            height="65vh"
            theme="vs-dark"
            language={language}
            defaultValue={CODE_SNIPPETS[language]}
            onMount={onMount}
            value={value}
            onChange={(value) => setValue(value)}
          />
        </Box>
        {/* <Output editorRef={editorRef} language={language} /> */}
      </HStack>
    </Box>
  );
}
