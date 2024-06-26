/** @format */
// @ts-nocheck
import { useState } from "react";

import { Ref } from "react";
import { useMDXComponent } from "next-contentlayer/hooks";
import styled from "styled-components";
import CustomTable from "@/components/Common/Table";

type PostContentProps = {
  postContentRef: Ref<HTMLDivElement>;
  code: string;
};

type PostImageProps = React.ImgHTMLAttributes<HTMLImageElement>;

const PostContent = ({
  postContentRef,
  code,
}: PostContentProps) => {
  const MDXComponent = useMDXComponent(code);

  return (
    <PostContentContainer ref={postContentRef}>
      <MDXComponent
        components={{
          img: ({ src, alt, width, height }) => (
            <PostImage
              src={src}
              alt={alt}
              width={width}
              height={height}
              loading="lazy"
            />
          ),
          table: ({ children }) => (
            <CustomTable>{children}</CustomTable>
          ),
        }}
      />
    </PostContentContainer>
  );
};

export default PostContent;

const PostContentContainer = styled.section<HTMLDivElement>`
  h1 {
    margin: 2rem 0 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.LARGE};
    font-weight: 900;
  }

  h2,
  h3,
  h4 {
    margin: 2rem 0 1rem 0;
    font-size: ${({ theme }) => theme.fontSize.EXTRA_BIG};
    font-weight: 900;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.MEDIUM};

    color: ${({ theme }) => theme.color.main};
    line-height: 1.7;
    word-break: break-all;
  }

  p {
    white-space: pre-wrap;
  }

  p,
  li,
  span,
  code {
    word-break: keep-all;
    line-height: 1.8;
    font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  }

  ol,
  ul {
    margin: 1rem 0;
    padding: 2rem;
    border-radius: 5px;
    border: ${({ theme }) => `1px solid ${theme.color.border2}`};
    background-color: ${({ theme }) => theme.color.main50};
  }

  li {
    margin-left: 2rem;
    color: ${({ theme }) => theme.color.black};
  }

  code:not([data-language]) {
    padding: 0.25rem 0.75rem;
    margin-right: 0.25rem;
    border-radius: 5px;
    font-size: ${({ theme }) => theme.fontSize.NORMAL};
    color: ${({ theme }) => theme.color.main800};
    background-color: ${({ theme }) => theme.color.main50};
  }

  th {
    text-align: start;
    padding: 1.25rem 1.75rem;
    font-size: ${({ theme }) => theme.fontSize.NORMAL};
    border: ${({ theme }) => `1px solid ${theme.color.border3}`};
    background-color: ${({ theme }) => theme.color.background3};
  }

  td {
    padding: 1.25rem 1.75rem;
    font-size: ${({ theme }) => theme.fontSize.NORMAL};
    border: ${({ theme }) => `1px solid ${theme.color.border3}`};
  }

  pre {
    width: 100%;
    word-break: break-all;
    overflow: auto;
    padding: 1.5rem;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.codeTheme};

    &::-webkit-scrollbar {
      width: 100%;
      height: 7.5px;
      border-radius: 0 0 5px 5px;
      background-color: ${({ theme }) =>
        theme.color.background3};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0 0 5px 5px;
      background-color: ${({ theme }) => theme.color.main};
    }
  }

  blockquote {
    margin: 1.5rem 0;
    padding: 2rem 2rem 2rem 2.5rem;
    border-left: ${({ theme }) =>
      `5px solid ${theme.color.main}`};
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.background3};
  }
`;

const PostImage = styled.img<PostImageProps>`
  display: block;
  max-width: 100%;
  margin: 1.5rem auto;
`;
