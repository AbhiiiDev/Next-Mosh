import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-start gap-8 bg-slate-200 p-4'>
        <Link href='/' className='font-bold text-2xl'>
            Next.js
        </Link>
        <Link href='/users'>
            Users
        </Link>
        <Link href='/products'>
            Products
        </Link>
        <Link href='/admin'>
            Admin
        </Link>
      
      
      
    </div>
  )
}

export default Navbar
