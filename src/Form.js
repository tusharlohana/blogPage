import React, { useState } from 'react'
import { useHistory } from 'react-router'

const Form = () => {

    const [title, settitle] = useState('')
    const [author, setauthor] = useState('')
    const [content, setcontent] = useState('')
    const [isPending, setisPending] = useState(false)
    const history = useHistory()

    const handleSubmit = () => {

        const blog = { title, author, content }
        console.log(blog)
        setisPending(true)
        fetch('http://localhost:8000/blogs',
            {
                method: "POST",
                headers: { "Content-Type": " application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log("new blog added")
                setisPending(false)
                // history.go(-1)
                history.push('/')
            })
    }

    return (
        <div className="w-50 m-5">
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Blog Title</label>
                <input value={title}
                    onChange={(e) => settitle(e.target.value)}
                    type="text"
                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Blog Author</label>
                <input
                    value={author}
                    onChange={(e) => setauthor(e.target.value)}
                    type="text" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group ">
                <label htmlFor="exampleFormControlTextarea1 mb-3">Blog content</label>
                <textarea
                    value={content}
                    onChange={(e) => setcontent(e.target.value)}
                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            {!isPending && <button onClick={handleSubmit} type="submit" className="btn btn-danger mt-3">Submit blog</button>}
            {isPending && <button onClick={handleSubmit} type="submit" className="btn btn-danger mt-3">Submiting blog...</button>}
        </div>
    )
}

export default Form
