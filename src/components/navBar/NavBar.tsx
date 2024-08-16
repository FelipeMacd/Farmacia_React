import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <div className='flex gap-4 mb-4'>NavBar</div>
            <Link to="/home">Home</Link>
        </>

    )
}

export default NavBar