'use client';
import { useRouter } from 'next/navigation'
import React from 'react'


interface Props{
  params:{slug:string[]}
  searchParams:{sort:string}
}

const page = ({params:{slug},searchParams:{sort}}:Props) => {



  return (
    <div>
      this page url : <span className='font-extrabold text-xl'>{slug}</span>  query params :<span className='font-extrabold text-xl'> {sort} </span>       
    
    <button className='btn btn-primary' onClick={()=>router}> Go to User page</button>
    </div>
  )
}

export default page
