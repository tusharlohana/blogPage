import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav className="nav">
            <h1>My Blogs</h1>
                <Link to="/">Home</Link>
                <Link to="/Create">Create Blogs</Link>
            </nav>
        </div>
    )
}

export default Nav
