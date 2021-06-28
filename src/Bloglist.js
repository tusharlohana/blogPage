import React from 'react'

const Bloglist = ({Blogs , title , handleDelete}) =>{
    // const Blogs = props.Blogs;
    // const title = props.title;

    return (
        <div>
            <div className="blog">
            <h1>{title}</h1>
                {Blogs.map((blog) => (
                    <div className="content" key={blog.id}>
                        <h1>"{blog.title}"</h1>
                        <h2>writer name is "{blog.author}"</h2>
                        <p> "{blog.content}"</p>
                        <button onClick={()=>handleDelete(blog.id)}>Delete blog</button>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Bloglist
