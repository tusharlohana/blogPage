import React from 'react'
import { useHistory, useParams } from 'react-router'
import useFetch from './useFetch'

const BlogDetails = () => {

    const { id } = useParams()
    const { Data: Blogs, isLoading } = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + Blogs.id, {
            method: "DELETE"
        }).then(() => {
            console.log("blog deleted")
            history.push('/')
        })

    }
    return (
        <div>
            <div> blog of id {id}</div>

            {isLoading && <div>loading ...</div>}

            {Blogs && (
                <article>
                    <h1>{Blogs.title}</h1>
                    <h2>writer name is "{Blogs.author}"</h2>
                    <p>{Blogs.content}</p>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
