import React, { useState } from 'react'

const Username = () => {
  const [userName,setUserName]=useState('');
  const [containSpace,setContainSpace]=useState(false);
  const [isActive,setIsActive]=useState(false)

  function checkSpace(event){
    setUserName(event.target.value);
  let space=" ";
  let hasSpace=[...event.target.value].some(gap=>space.includes(gap));
  setContainSpace(hasSpace);
}
  return (
    <div className='flex justify-around h-fit p-2'>
        <div className='flex flex-col font-poppins'>
            <label htmlFor="userName" className='label'>Set User Name</label>
            <input type="text" value={userName} name="userName" id="userName" className='input-box focus:outline-none ' required onChange={checkSpace} onFocus={()=>setIsActive(true)} onBlur={()=>setIsActive(false)}/>
            <p className='warning'>{isActive && containSpace && "Enter without space"}</p>
        </div>
    </div>
  )
}

export default Username