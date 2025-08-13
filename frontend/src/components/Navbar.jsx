import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-base-300 border-b border-base-content/10'>
        <div className='container mx-auto px-4 py-2'>   
            <h1 className='text-2xl font-bold text-center'>Think Board</h1>
        </div>
        <nav className='container mx-auto px-4 py-2'>
            <ul className='flex justify-center space-x-4'>
                <li><a href="/">Home</a></li>
                <li><a href="/create">Create Note</a></li>
            </ul>
        </nav>

    </header>
  )
}

export default Navbar