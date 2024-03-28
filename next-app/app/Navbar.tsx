'use client';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    const {data:session,status}=useSession();

    const [isDropDown,setDropDown]=useState(false);


    const handleHover=()=>{
setDropDown(true);
    }

    const handleLeave=()=>{
setDropDown(false);
    }


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
        <div className='' onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          <span className='relative'>
             {session.user?.name}
            
            </span> 
            {
                isDropDown &&

                <span className='top-0'>
                    <Link href='/api/auth/signout'>
                        SignOut
                    </Link>
                </span>
            }
        
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
