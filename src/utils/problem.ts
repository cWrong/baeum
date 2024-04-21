import { allPosts } from "@/contentlayer/generated";
import type { Post } from "@/contentlayer/generated";

export type ProblemSearchType = {
  id: string;
  type: string;
};

export type ProblemMetadataType = {
  id: string;
  title: string;
  type: string;
};

export type ProblemListType = {
  selective: ProblemMetadataType[];
  subjective: ProblemMetadataType[];
};

export async function getProblem({ id, type }: ProblemSearchType) {
  const mdx_filename = `${type}/${id}`;
  const post: Post | undefined = allPosts.find(
    (post) => post._raw.flattenedPath === mdx_filename
  );
  return post;
}

export async function getProblemList(): Promise<ProblemListType> {
  const problems = allPosts.map((post): ProblemMetadataType => {
    return {
      id: post._raw.flattenedPath.split("/")[1],
      title: post.title,
      type: post._raw.sourceFileDir,
    };
  });

  const problemList = {
    selective: problems.filter((post) => post.type === "selective"),
    subjective: problems.filter((post) => post.type === "subjective"),
  };

  return problemList;
}

export async function getProblemNumbers() {
  return allPosts.length;
}

export async function getProblemIdx(path: string) {
  const dir = path.split("problem/", 2)[1];
  return allPosts.findIndex((post) => post._raw.flattenedPath === dir) + 1;
}

export async function getNextProblemPath(idx: number) {
  if (idx >= allPosts.length) {
    return undefined;
  }

  if (idx <= 0) {
    return undefined;
  }

  const post: Post = allPosts[idx];
  console.log("next: ", post2Path(post));
  return post2Path(post);
}

export async function getPrevProblemPath(idx: number) {
  if (idx > allPosts.length) {
    return undefined;
  }

  if (idx <= 1) {
    return undefined;
  }

  const post: Post = allPosts[idx - 2];

  console.log("prev: ", post2Path(post));
  return post2Path(post);
}

export function post2Path(post: Post) {
  return `/problem/${post._raw.flattenedPath}`;
}
