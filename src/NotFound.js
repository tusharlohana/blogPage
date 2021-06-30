import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1>OOPs...</h1>
            <h1>404 ERROR</h1>
            <h2>page not found...</h2>
            <Link to='/'>back to homePage</Link>
        </div>
    )
}

export default NotFound