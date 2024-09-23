// app/posts/[id]/page.tsx

import client from "@/apolloClient";
import { GET_POST, GET_POSTS } from "@/graphql/queries";

export const revalidate = 10;

export async function generateStaticParams() {
  const { data } = await client.query({
    query: GET_POSTS,
    variables: { page: 1, limit: 100 },
  });

  return data.posts.map((post: any) => ({
    id: post.id,
  }));
}

export default async function PostPage({ params }: { params: { id: string } }) {
  const { data } = await client.query({
    query: GET_POST,
    variables: { id: params.id },
  });

  if (!data.post) {
    return <div>Post not found</div>;
  }

  const post = data.post;

  return (
    <div>
      <h1 className='text-5xl font-bold p-5 text-pretty text-blue-300'>{post.title}</h1>
      <p className="pl-7">By {post.author}</p>
      <p className='text-gray-400 pl-7 font-thin' >{new Date(post.publishedDate).toLocaleDateString()}</p>
      <p className="text-lg pt-10 pl-7">{post.body}</p>
    </div>
  );
}
