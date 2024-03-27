'use client';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

    const {data:session,status}=useSession();



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
   {
    status === 'loading' &&
    <div>Loading ...</div>
   }

      {
        status ==='authenticated' && 
        <div>
            {session.user?.name}
        </div>
      }
      
      {
        status === 'unauthenticated' && 
       <Link href='/api/auth/signin'>
            Login
        </Link>
    }       
      
      
    </div>
  )
}

export default Navbar
