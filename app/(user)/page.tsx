import React from "react";
import { groq } from "next-sanity";
import { previewData } from "next/headers";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewLogList from "../../components/PreviewLogList";
import BlogList from "../../components/BlogList";

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

const HomePage = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#789ff0]">
              Loading Preview Mode...
            </p>
          </div>
        }
      >
        <PreviewLogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
};

export default HomePage;
