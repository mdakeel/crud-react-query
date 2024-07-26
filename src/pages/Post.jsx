import React from 'react';
import { useGetPost } from '../react-query/QueriesAndMutations';
import { useNavigate } from 'react-router-dom';

const Post = () => {
  const { data, error, isLoading } = useGetPost();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <button onClick={() => navigate('/')}>Back to Post List</button>
      <h1>{data.title}</h1>
      <p>{data.body}</p>
    </div>
  );
};

export default Post;
