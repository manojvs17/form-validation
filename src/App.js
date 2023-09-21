import './App.css';
import Email from './components/Email';
import Gender from './components/Gender';
import Header from './components/Header';
import Name from './components/Name';
import Password from './components/Password';
import Signup from './components/Signup';
import Username from './components/Username';
import SetCountry from './components/SetCountry';

function App() {
  return (
    <div className="App-header h-fit w-[100%] p-5">
     <section className='border-4 border-black rounded-[20px] py-5 px-3 section-bg flex flex-col '>
      <Header />
      <form className='flex flex-col gap-2'>
        <Name />
        <Gender />
        <Email />
        <Username />
        <Password />
        <SetCountry />
        <Signup />
      </form>
      </section>
    </div>
  );
}

export default App;
