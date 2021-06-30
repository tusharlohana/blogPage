import React from 'react'
import Bloglist from './Bloglist'
import useFetch from './useFetch'
// var CryptoJS = require("crypto-js");

function Home() {

    const{ Data : Blogs, isLoading} = useFetch("http://localhost:8000/blogs")
    // const [name, setname] = useState("yadav")

    // const changeName =()=>{
    //     setname("shubham")
    // }

    // const handleDelete = (id) => {
    //     const newBlog = Blogs.filter((blog) => blog.id !== id)
    //     // setBlogs(newBlog)
    // }
    
    return (
        <>
            <h1>this is a Home page</h1>

            {/* ## we use blogs && here becouse we want to run Bloglist only after out get request 
            ## if we dont do this we get error " can not map of null " becouse the req takes
            ## fracton of time to get data 
            ## but we set it null initially thats why error happns  

            ## {} is for js in jsx  
            ## && is logical AND operator          */}
            {isLoading && <div>Loading...</div>}
            {Blogs && <Bloglist Blogs={Blogs} title="all blogs !" />}
                            {/* handleDelete={handleDelete} */}


            {/* <Bloglist Blogs={Blogs.filter((blog)=>blog.author === "Tushar")} title="Tushar's blogs !"/> */}
            {/* <button onClick={()=>{changeName()}}> change name</button> */}
            {/* <p>{name}</p> */}
        </>
    )
}

export default Home
