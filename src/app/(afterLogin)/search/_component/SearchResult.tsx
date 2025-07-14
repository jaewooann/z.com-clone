"use client";

import { Post as IPost } from "@/model/Post";
import { useQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/Post";
import { getSearchResult } from "../_lib/getSearchResult";

interface SearchResultProps {
  searchParams: { q: string; pf?: string; f?: string };
}

export default function SearchResult({ searchParams }: SearchResultProps) {
  const { data } = useQuery<
    IPost[],
    object,
    IPost[],
    [_1: string, _2: string, SearchResultProps["searchParams"]]
  >({
    queryKey: ["posts", "search", searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });
  return data?.map((post) => <Post key={post.postId} post={post} />);
}
