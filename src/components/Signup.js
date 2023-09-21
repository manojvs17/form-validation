import React from 'react'

const Signup = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
        <h4 className='text-center text-[green] font-bold'>Click the button below to SignUp!</h4>
        <button type="submit" className='rounded-[10px] p-2 bg-[#3868cd] text-white hover:scale-[1.1] duration-200 focus:scale-[1.1]'>SignUp</button>
    </div>
  )
}

export default Signup