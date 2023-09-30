import React, { useState } from 'react'

const Name = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('')
    const [isValidFirstName, setIsValidFirstName] = useState(true);
    const [isValidLastName, setIsValidLastName] = useState(true);

    function handleFirstName(event){
        setFirstName(event.target.value);
        const invalidChars = "0123456789!@#$%^&*()_+-=[]{};:'\"\\|,.<>/?";
        const containsInvalidChar = [...event.target.value].some(char => invalidChars.includes(char));
        setIsValidFirstName(!containsInvalidChar);
    }
    function handleLastName(event){
        setLastName(event.target.value);
        const invalidChars = "0123456789!@#$%^&*()_+-=[]{};:'\"\\|,.<>/?";
        const containsInvalidChar = [...event.target.value].some(char => invalidChars.includes(char));
        setIsValidLastName(!containsInvalidChar);
    }
    
    const handleFNBoxStyle={
        boxShadow: (!isValidFirstName) ? 'inset 0px 0px 0px 2px red' : ''
    }
    const handleLNBoxStyle={
        boxShadow: (!isValidLastName) ? 'inset 0px 0px 0px 2px red' : ''
    }
    
  return (
    <div className='flex flex-wrap justify-around gap-10 w-100% mx-auto p-2 h-fit'>
        <div className='flex flex-col font-poppins'>
            <label htmlFor="firstName" className='label'>First Name</label>
            <input type="text" name='firstName' value={firstName} id='firstName' className='input-box focus:outline-none ' required onChange={handleFirstName} style={handleFNBoxStyle}/>
            {!isValidFirstName && <p className='warning'>Enter only text</p>}
        </div>
        <div className='flex flex-col font-poppins'>
            <label htmlFor="lastName" className='label'>Last Name</label>
            <input type="text" name='lastName' value={lastName} id='lastName' className='input-box focus:outline-none ' required onChange={handleLastName} style={handleLNBoxStyle}/>
            {!isValidLastName && <p className='warning'>Enter only text</p>}
        </div>        
    </div>
  )
}

export default Name