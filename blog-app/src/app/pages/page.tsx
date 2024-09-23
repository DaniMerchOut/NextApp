// pages/index.tsx
'use client';
import { GET_POSTS } from '@/graphql/queries';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import { useState } from 'react';


const HomePage = () => {
  const [page, setPage] = useState(1);
  const { data, loading, error } = useQuery(GET_POSTS, {
    variables: { page, limit: 5 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handlePrevious = () => setPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setPage(prev => prev + 1);

  return (
    <div>
      <div className='text-center text-5xl font-bold p-5'>
      <h1>Blog Posts</h1>
      </div>
      <Link href="/pages/create">
        <p className='p-3 text-center text-lg text-pretty text-blue-300'>Create New Post</p>
      </Link>
      <ul>
        {data.posts.map((post: any) => (
          <li className='p-5' key={post.id}>
            <Link href={`/pages/posts/${post.id}`}>
              <p>
                <h2 className='text-2xl font-bold text-blue-300'>{post.title}</h2>
                <p className='text-gray-400'>{new Date(post.publishedDate).toDateString()}</p>
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <button className='btn btn-primary' onClick={handlePrevious} disabled={page === 1}>
        Previous
      </button>
      <button className='btn btn-primary' onClick={handleNext}>Next</button>
    </div>
  );
};

export default HomePage;
