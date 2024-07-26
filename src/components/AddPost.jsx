import React from 'react'
import PostForm from './PostForm'
import { useCreatePost } from '../react-query/QueriesAndMutations'
import {v4 as uuidv4} from 'uuid'

const AddPost = () => {
  const {mutateAsync: createPost} = useCreatePost()
   
  const handleAddPost = (post) => {
    createPost({
      id: uuidv4(),
      ...post
    })
  }
  return (
    <div>
        <h1>Add Post</h1>
        <PostForm onSubmit={handleAddPost} initialValue={{}} />
    </div>
  )
}

export default AddPost