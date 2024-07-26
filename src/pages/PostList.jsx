import React from 'react';
import AddPost from '../components/AddPost';
import { useDeletePost, useGetPosts } from '../react-query/QueriesAndMutations';
import { useNavigate } from 'react-router-dom'

const PostList = () => {
    const { data, error, isLoading } = useGetPosts();
    const navigate = useNavigate()

    const {mutateAsync: deletePost} = useDeletePost()

    const handleDelete = async (id) => {
        await deletePost(id)
    }

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <AddPost />
            <h1>Post List</h1>
            {data && data.length > 0 ? (
                <ul>
                    {data.map((post) => (
                        <div style={{background:'grey' }} key={post.id}>
                        <h1 style={{cursor:"pointer" }} onClick={() => navigate(`/post/${post.id}`)}>{post.title}</h1>
                        <button onClick={() => navigate(`/post/${post.id}/edit`)}>Edit</button>
                        <button onClick={() => handleDelete(post.id)}>Delete</button>
                        </div>
                    ))}
                </ul>
            ) : (
                <div>No posts available</div>
            )}
        </div>
    );
};

export default PostList;
