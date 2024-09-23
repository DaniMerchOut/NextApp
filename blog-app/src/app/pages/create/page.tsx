// app/create/page.tsx
'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { CREATE_POST } from '@/graphql/mutations';
import { GET_POSTS } from '@/graphql/queries';
import { revalidatePath } from 'next/cache';

interface FormData {
  title: string;
  body: string;
  author: string;
}

const schema = yup.object().shape({
  title: yup.string().required('Title is required'),
  body: yup.string().required('Body is required'),
  author: yup.string().required('Author is required'),
});

export default function CreatePost() {
  const router = useRouter();
  const [createPost] = useMutation(CREATE_POST, {
    update(cache, { data: { createPost } }) {
      const existingPosts: any = cache.readQuery({
        query: GET_POSTS,
        variables: { page: 1, limit: 5 },
      });
      cache.writeQuery({
        query: GET_POSTS,
        variables: { page: 1, limit: 5 },
        data: {
          posts: [createPost, ...existingPosts.posts],
        },
      });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await createPost({
        variables: data,
        optimisticResponse: {
          createPost: {
            __typename: 'Post',
            id: 'temp-id',
            title: data.title,
            publishedDate: new Date().toISOString(),
          },
          
        },
        
      });
     
      router.push('/pages');
      revalidatePath("/pages/create");
      
    } catch (err) {
      console.error('Error creating post:', err);
    }
  };

  return (
    <div>
      <h1 className='text-3xl text-center p-5'>Create New Post</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Title</label>
          <input {...register('title')} />
          {errors.title && <p>{errors.title.message}</p>}
        </div>
        <div>
          <label>Body</label>
          <textarea {...register('body')} />
          {errors.body && <p>{errors.body.message}</p>}
        </div>
        <div>
          <label>Author</label>
          <input {...register('author')} />
          {errors.author && <p>{errors.author.message}</p>}
        </div>
        <div className='pt-5'>
        <button className='btn btn-primary' type="submit">Submit</button> 
        </div>
      </form>
    </div>
  );
}
