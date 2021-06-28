import React, { useEffect, useState } from 'react'
import Bloglist from './Bloglist'

function Home() {

    const [Blogs, setBlogs] = useState([
        { title: "React.js", content: "this is lorem content", author: "Tushar", id: 1 },
        { title: "Rest-Api", content: "this is lorem content", author: "Ankit", id: 2 },
        { title: "Redux Basics", content: "this is lorem content", author: "Tushar", id: 3 },
    ])

    const handleDelete = (id)=>{
        const newBlog = Blogs.filter((blog)=>blog.id !== id )
        setBlogs(newBlog)
    }
    
    useEffect(() => {
      console.log("effect is triggered")
    })

    return (
        <>
            <h1>this is a Home page</h1>
            <Bloglist Blogs={Blogs} title="all blogs !" handleDelete={handleDelete}/>
            {/* <Bloglist Blogs={Blogs.filter((blog)=>blog.author === "Tushar")} title="Tushar's blogs !"/> */}
        </>
    )
}

export default Home
