// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch function
const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function PostsComponent() {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ["posts"], // cache key
    queryFn: fetchPosts,
    staleTime: 5000, // data is considered fresh for 5s
    cacheTime: 1000 * 60 * 5, // cache persists for 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Posts</h2>

      <button
        onClick={() => refetch()}
        className="mb-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul className="space-y-2">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} className="p-2 border rounded shadow-sm">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-gray-700">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
