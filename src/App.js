import './App.css';
import Email from './components/Email';
import Gender from './components/Gender';
import Header from './components/Header';
import Name from './components/Name';
import Password from './components/Password';
import Signup from './components/Signup';
import Username from './components/Username';
import SetCountry from './components/SetCountry';
import { useState } from 'react';
import Result from './components/Result';

function App() {
  const [result,setResult]=useState(false);
  const [data,setData]=useState('');

  function handleSubmit(event){
      event.preventDefault();

      let formElements = event.target.elements;

      let submittedData = {
        firstName: formElements.firstName.value,
        lastName: formElements.lastName.value,
        gender: formElements.gender.value,
        dob: formElements.dob.value,
        email: formElements.email.value,
        phoneNumber: formElements.phnum.value,
        userName: formElements.userName.value,
        password: formElements.password.value,
        confirmPassword: formElements.confirmpassword.value,
        country: formElements.country.value,
        state: formElements.state.value,
        city: formElements.city.value
      };
      setResult(true)
      setData(submittedData)
      console.log(submittedData);
}
 function onToggle(){
  setResult(false);
 }
  return (
    <div className="App-header h-fit w-[100%] p-5">
     <section className='border-4 border-black rounded-[20px] py-5 px-3 section-bg flex flex-col '>
      {(result) ? (
      <Result data={data} onToggle={onToggle}/>
      ) : 
      (
      <>
          <Header />
          <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
              <Name />
              <Gender />
              <Email />
              <Username />
              <Password />
              <SetCountry />
              <Signup />
          </form>
      </>)
      
      }
      </section>
    </div>
  );
}

export default App;
