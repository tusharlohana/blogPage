import React from 'react'
import { useParams } from 'react-router'
import useFetch from './useFetch'

const BlogDetails = () => {

    const { id } = useParams()
    const { Data: Blogs, isLoading } = useFetch('http://localhost:8000/blogs/' + id )
    return (
        <div>
            <div> blog of id {id}</div>
            
            {isLoading && <div>loading ...</div>}

            {Blogs && (
                <article>
                    <h1>{Blogs.title}</h1>
                    <h2>writer name is "{Blogs.author}"</h2>
                    <p>{Blogs.content}</p>
                </article>
            )}
        </div>
    )
}

export default BlogDetails
