import React from 'react'

const page = ({params}:{params:{id:number}}) => {
  return (
    <div className='p-5 text-center'>
      This is user particular Id Page for the number- {params.id    }
    </div>
  )
}

export default page
