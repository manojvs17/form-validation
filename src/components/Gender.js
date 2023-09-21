import React from 'react'

const Gender = () => {
  return (
    <div className='flex flex-wrap gap-5 justify-around h-fit w-[100%] p-2'>
        <div className='flex flex-col font-poppins'>
        <label htmlFor="gender" className='label'>Gender:</label>
        <select name="gender" id="gender" className='text-black border'>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
        </select>
        </div>
        <div className='flex flex-col font-poppins'>
            <label htmlFor="dob" className='label'>Date of Birth</label>
            <input type="date" name="dob" id="dob" className='text-black border' required/>
        </div>
    </div>
  )
}

export default Gender