'use client';
import { useRouter } from 'next/navigation'
import React from 'react'

const NewUser = () => {

const router= useRouter();

  return (
    <div className='m-2'>
      New user page 
      <button className='btn btn-primary m-4' onClick={()=> router.push('/users')}>Create a new user</button>
    </div>
  )
}

export default NewUser
