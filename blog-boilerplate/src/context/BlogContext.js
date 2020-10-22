import React,{useReducer} from 'react';


const BlogContext=React.createContext();
const blogReducer=(state,action)=> {

    switch (action.type) {
        case 'update_blogpost':
            return state.map((blogPost)=>{
                return blogPost.id===action.payload.id?action.payload:blogPost;
            });

        case 'add_blogpost':
            return [...state, {
                id:Math.floor(Math.random()*9999),
                title:action.title,
                content:action.content


            }];

        case 'delete_blogpost':
            return  state.filter((blogPost)=>blogPost.id !==action.payload);
        default:
            return state;
    }
}

export const BlogProvider=({children})=>{

    const [blogPosts,dispatch]=useReducer(blogReducer,[{id:1,title:'Test Post',content:'Test Content'}]);

    const addBlogPost=(title,content,callback)=>{

        dispatch({type:'add_blogpost',title:title,content:content});
        callback();
    }
    const updateBlogPost=(id:title,content)=>{
        dispatch({type:'update_blogpost',id,title,content});
    }
    const deleteBlogPost=(id)=>{
        dispatch({type:'delete_blogpost',payload:id});
    }

    return(
        <BlogContext.Provider value={{data:blogPosts,addBlogPost,updateBlogPost,deleteBlogPost}}>
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;