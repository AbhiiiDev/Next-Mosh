import React from 'react'
import Link from 'next/link'
import {sort} from 'fast-sort';

interface User{
    name:string,
    id:number,
    email:string
  }

interface Props{
  sortOrder:string
}

const UserTable = async ({sortOrder}:Props) => {




  const response=await fetch('https://jsonplaceholder.typicode.com/users/',
  {cache:'no-cache'}
  )
    const users:User[]=await response.json();

    const sortedUser= sort(users).asc(sortOrder==='email'?user=>user.email:user=>user.name);


  return (
    <div>
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
    </div>
  )
}

export default UserTable
