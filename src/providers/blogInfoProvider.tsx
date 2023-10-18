import React, { useContext } from 'react';

const blogInfo = {
    React: {
      post: "Learn useContext Hooks",
      author: "Adhithi Ravichandran"
    },
    GraphQL: {
      post: "Learn GraphQL Mutations",
      author: "Adhithi Ravichandran"
    }
  };

export const blogInfoContext = React.createContext(blogInfo)

function BlogInfoProvider({children}:any) {
    return (
        <>
        {children}
        </>
    )
}
export default BlogInfoProvider;