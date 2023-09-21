import React, { useState } from 'react'

const Email = () => {
    const [phoneNumber,setPhoneNumber]=useState('');
    const [isValidNumber,setIsValidNumber]=useState(true);
    const [isNumberFocused,setNumberFocused]=useState(false);

    function handlePhoneNumber(event){
        let phNum=event.target.value;
        setPhoneNumber(phNum);
        //checks for if phone number has atleast 10 numbers
        if(phNum && phNum.length<10){setIsValidNumber(true)}
        if(phNum && phNum.length===10){setIsValidNumber(false)}
    }

    function showHideNumber(){
        if(isNumberFocused){
        return <p className='warning'>{isValidNumber && "Enter 10 Numbers"}</p>
        }
    }
  return (
    <div className='flex flex-wrap justify-around gap-10 mx-auto  h-fit ' >
        <div className='flex flex-col font-poppins'>
            <label htmlFor="email" className='label'>E-Mail</label>
            <input type="email" name="email" id="email" className='input-box focus:outline-none' required />
        </div>
        <div className='flex flex-col font-poppins'>
            <label htmlFor="phnumber" className='label'>Phone Number</label>
            <input type="number" value={phoneNumber} name="phnum" id="phnumber" className='input-box focus:outline-none' required onChange={handlePhoneNumber} placeholder='0' onFocus={()=>setNumberFocused(true)} onBlur={()=>setNumberFocused(false)}/>
            {showHideNumber()}
        </div>
    </div>
  )
}

export default Email