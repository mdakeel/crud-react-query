import React, { useState, useEffect } from 'react';

const PostForm = ({ initialValue = { title: "", body: "" }, onSubmit }) => {
   const [post, setPost] = useState(initialValue);

   useEffect(() => {
      if (initialValue) {
         setPost(initialValue);
      }
   }, [initialValue]);

   const handleChangeInput = (e) => {
      setPost((prevPost) => ({
         ...prevPost,
         [e.target.name]: e.target.value
      }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         await onSubmit(post);
         console.log("Post Submitted Successfully", post);
      } catch (error) {
         console.error('Error', error);
      }
   };

   const renderField = (label, name) => {
      return (
         <div key={name}>
            <label>{label}</label>
            <input
               type="text"
               name={name}
               placeholder={`Enter ${label.toLowerCase()}`}
               value={post[name] || ""}
               onChange={handleChangeInput}
            />
         </div>
      );
   };

   return (
      <div>
         <form onSubmit={handleSubmit}>
            {renderField('Title', 'title')}
            {renderField('Body', 'body')}
            <button type='submit'>Submit</button>
         </form>
      </div>
   );
};

export default PostForm;
