import React from 'react';
import PostForm from '../components/PostForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetPost, useUpdatePost } from '../react-query/QueriesAndMutations';

const EditPost = () => {
   const { id } = useParams();
   const { data: post, isLoading, isError } = useGetPost(id);
   const navigate = useNavigate();
   const { mutateAsync: updatePost } = useUpdatePost();

   const handleSubmit = async (updatedPost) => {
      await updatePost(updatedPost);
   }

   if (isLoading) {
      return <div>Loading...</div>;
   }

   if (isError) {
      return <div>Error loading post data.</div>;
   }

   return (
      <div>
         <button onClick={() => navigate('/')}>Back to Post List</button>
         <PostForm onSubmit={handleSubmit} initialValue={post} />
      </div>
   );
}

export default EditPost;
