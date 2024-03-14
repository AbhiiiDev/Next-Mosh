
import React, { use } from 'react'
import UserTable from '@/app/users/UserTable' 

interface Props{
  searchParams:{sort:string}
}

const page = async ({searchParams:{sort}}:Props) => {

 console.log(sort)
  return (
    <>
   
    <div className='text-center p-5 flex flex-col justify-center items-center '>

    <h1>
      Users
    </h1>
   <UserTable sortOrder={sort}/>
      </div>
    </>
  )
}

export default page
