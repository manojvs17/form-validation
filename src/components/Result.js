import React from 'react'

const Result = ({data,onToggle}) => {
    const {firstName,lastName,email,userName,city}=data;
  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='text-center'>
            Hello <span className='font-poppins text-[1.4em] text-[red] font-bold'>{firstName} {lastName}</span> from <span className='font-poppins text-[green] font-bold'>{city}</span>,<br></br>Thank you for connecting With us.<br></br>Your Username will be <span className='font-poppins text-[blue] font-bold'>{userName}</span>.<br></br>We will connect you through <br></br><span className='font-poppins text-teal-600 font-bold'>"{email}"</span>
        </div>
        <button onClick={()=>onToggle()} className='border-4 border-black p-[5px] mt-[1em] rounded-[10px] hover:bg-blue-700 hover:text-white hover:scale-[1.1]'>Back</button>
    </div>
  )
}

export default Result