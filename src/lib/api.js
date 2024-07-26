const BASE_URL = "http://localhost:3000/posts";

// Fetch all posts
export const getPosts = async () => {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    return response.json(); 
};

// Fetch a single post by ID
export const getPost = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    return response.json(); 
};

// Create post 
export const createPost = async (newPost) => {
    const response = await fetch(`${BASE_URL}`, {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(newPost)
    })
    if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.status}`);
    }
    return response.json(); 
}

// edit post 
export const updatePost = async (updatedPost) => {
    const response = await fetch(`${BASE_URL}/${updatedPost.id}`, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPost)
    })
    if(!response.ok){
        throw new Error(`Network response was not ok. Status: ${response.status}`)
    }
    return response.json();
}

// delete post 
export const deletePost = async (id) =>{
    const response = await fetch(`${BASE_URL}/${id}`,{
        method : "DELETE",
    })
    if(!response.ok){
        throw new Error(`Network response was not ok. Status: ${response.status}`)
    }
    return response.json();
}
