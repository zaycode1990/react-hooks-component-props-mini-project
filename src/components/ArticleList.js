import React from "react";
import Article from "./Article";
function ArticleList({posts})
{ const articlePosts = posts.map((post=>{
return (
    <Article key={post.id} title={post.title} date={post.date} preview={post.preview}> </Article>
)

}))
    
return (
<main>
{articlePosts}
</main>

)

}


export default ArticleList