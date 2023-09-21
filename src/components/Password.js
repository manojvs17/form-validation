import React, { useState } from 'react'

const Password = () => {
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);

    const [containNumber,numberStatus]=useState(false);
    const [containSpecialChar,specialCharStatus]=useState(false);
    const [containCapital,capitalStatus]=useState(false);
    const [containSmall,smallStatus]=useState(false);
    const [containSpace,spaceStatus]=useState(false);

    function handleChangePassword(event){
        setPassword(event.target.value);

        //to check if password has atleast one number or not
        let numbers="0123456789";
        let hasNumber=[...event.target.value].some(num=>numbers.includes(num));
        numberStatus(hasNumber);

        //to check if password has atleast one specialcharacter or not
        let specialChar="~`!@'#$%^&*()_+=-[];',./?><:{}|";
        let hasSpecialChar=[...event.target.value].some(char=>specialChar.includes(char));
        specialCharStatus(hasSpecialChar);

        //to check if password has atleast one uppercase alphabet or not
        let upperCase="QWERTYUIOPASDFGHJKLZXCVBNM";
        let hasCapital=[...event.target.value].some(cap=>upperCase.includes(cap));
        capitalStatus(hasCapital);

        //to check if password has atleast one lowercase alphabet or not
        let lowerCase="qwertyuiopasdfghjklzxcvbnm";
        let hasSmall=[...event.target.value].some(small=>lowerCase.includes(small));
        smallStatus(hasSmall);

        //to check if password contains space 
        let space=" ";
        let hasSpace=[...event.target.value].some(gap=>space.includes(gap));
        spaceStatus(hasSpace);
    }

    function onChangeConfirmPassword(event){
        setConfirmPassword(event.target.value);
    }

    function showHidePassword(){
        if(isPasswordFocused){
            return <p className='warning-font'>Your Password is :{(password && containNumber && containSpecialChar && containCapital && containSmall && !containSpace)? <span className='good'>Strong</span>: <span className='warning'>Weak</span>}</p>
        }
    }

    function showHideConfirm(){
        if(confirmPassword){
            return <p className='warning-font'>Password {confirmPassword && password===confirmPassword ?<span className='good'>Matched</span> : <span className='warning'>not Matched</span>}</p>
        }
    }
  return (
    <div className='flex flex-wrap justify-around gap-10 mx-auto my-0 h-fit'>
         <div className='flex flex-col font-poppins'> 
            <label htmlFor="password" className='label'>Password</label>
            <input type="password" value={password} name="password" id="password" className='input-box focus:outline-none ' required onChange={handleChangePassword} onFocus={() => setIsPasswordFocused(true)}
        onBlur={() => setIsPasswordFocused(false)}/>
            {showHidePassword()}
        </div>
        <div className='flex flex-col font-poppins'>
        <label htmlFor="confirm-password" className='label'>Confirm Password</label>
            <input type="password" name="confirm-password" id="confirm-password" className='input-box focus:outline-none ' required onChange={onChangeConfirmPassword} onFocus={() => setConfirmPassword(true)}
        onBlur={() => setConfirmPassword(false)}/>
            {showHideConfirm()}
        </div>
    </div>
  )
}

export default Password