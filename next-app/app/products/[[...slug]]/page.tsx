import React from 'react'

const page = ({params}:{params:{slug:string[]}}) => {
  return (
    <div>
      this page url : {params.slug}
    </div>
  )
}

export default page
