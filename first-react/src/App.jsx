import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar';
import Textform from './components/Textform';



// export default function App() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// import About from './components/About'
function App() {
  const [mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor ='#333';
      document.body.style.color ='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      document.body.style.color ='balck';

    }
  }


  return (
    <>
<Navbar  mode={mode} toggleMode={toggleMode} title="Text-Utilities"/>
<center><div className="container my-3">
    <Textform heading="Enter your text to analyze" mode={mode}/>
    {/* <About/> */}

        </div></center>
       
         </>
  )
}

export default App
