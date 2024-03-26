'use client';

import { error } from 'console';
import { CldUploadWidget ,CldImage } from 'next-cloudinary';
import { useState } from 'react';
 

interface CloudinaryResult{
    public_id:string;

}
const page = () => {

const [publicId,setPublicId]=useState('');

  return (



    <>
    {
        publicId && 
        <CldImage src={publicId} width={200} height={160} alt='just image'/>
    }
   
<CldUploadWidget uploadPreset="f6vfpl7p"
onUpload={(result,widget)=>{
    console.log(result)
    if(result.event!=='success') return;

    const info=result.info as CloudinaryResult;
    setPublicId(info.public_id);

}}
>
  {({ open }) => {
    return (
      <button className='btn btn-primary' onClick={() => open()}>
        Upload an Image
      </button>
    );
  }}
</CldUploadWidget>
</>
  )
}

export default page
