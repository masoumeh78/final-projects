import React,{useContext} from 'react';
import {blogInfoContext} from '../providers/blogInfoProvider'; 


const BlogGraphQL=()=>{
    const blogDetails= useContext(blogInfoContext);
    return (
        <div>
            <h1>GraphQL</h1>
            <p>Topic: {blogDetails.GraphQL.post}</p>
            <p>Author: {blogDetails.GraphQL.author}</p>
        </div>
    )
}
export default BlogGraphQL;
