import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../lib/api';
import { useNavigate, useParams } from 'react-router-dom';

// fetching all post
export const useGetPosts = () => {
    return useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
        onSuccess: (data) => {
            console.log(data);
            return data;
        },
        onError: (error) => {
            console.error(error);
        }
    });
};

// fetching one post by id
export const useGetPost = () => {
    const { id } = useParams();

    return useQuery({
        queryKey: ["post", id],
        queryFn: () => getPost(id),
        onSuccess: (data) => {
            console.log(data);
            return data
        },
        onError: (error) => {
            console.error(error);
        }
    });
};

// create post 
export const useCreatePost = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createPost,
        onSuccess: (data) => {
            queryClient.invalidateQueries(data)
        },
        onError: (error) => {
            console.error(error);
        }
    })
}

// Edit post
export const useUpdatePost = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate()
    return useMutation({
        mutationFn: updatePost,
        onSuccess: (data) => {
            queryClient.invalidateQueries(data)
            navigate("/");
        },
        onError: (error) => {
            console.error(error);
        }
    })
}

// delet post 
export const useDeletePost = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deletePost,
        onSuccess: (data) => {
            queryClient.invalidateQueries(data)
            
        },
        onError: (error) => {
            console.error(error);
        }
    })

}




