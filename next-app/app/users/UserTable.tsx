
import React from 'react'
import Link from 'next/link'
import {sort} from 'fast-sort';


interface User{
    name:string,
    id:number,
    email:string
  }

interface Props{
  sortOrder:string,
  error:Error;
  reset:()=>void;
}

const UserTable = async ({sortOrder,error,reset}:Props) => {
  console.log(error)

  const response=await fetch('https://jsonplaceholder.typicode.com/users/',
  {cache:'no-cache'}
  )
    const users:User[]=await response.json();

    const sortedUser= sort(users).asc(sortOrder==='email'?user=>user.email:user=>user.name);


  return (

    <div>
      <Link href='/users/new' className='btn m-2'>
        Create a user
      </Link>
         <table className='table table-bordered'>
        <thead>
          <tr>
            <th className='bg-slate-500'>
              <Link href='/users?sort=name'>

              User Name
              </Link>
            </th>
            <th className='bg-slate-500'>
              <Link href='/users?sort=email'>
              Email
              </Link>
            </th>
          </tr>
        </thead>
        <tbody>
        {sortedUser.map((item)=>(
         <tr className='bg-slate-200' key={item.id}>

         <td >{item.name}</td>
         <td >{item.email}</td>
         

         </tr>
          ))}
          </tbody>
      </table>
      <button className='btn btn-primary'>Go to Home </button>
      {/* <button className='btn' onClick={()=>reset()}>Retry</button> */}
    </div>
  )
}

export default UserTable
