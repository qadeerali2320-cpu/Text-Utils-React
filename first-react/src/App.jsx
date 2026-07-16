import React, { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';



// export default function App() {
//   return (
//     <div>

//     </div>
//   )
// }

// import About from './components/About'
function App() {
  const [mode, setMode] = useState('light')
  const [mode2, setMode2] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({

      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has successfully enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'balck';
      showAlert("Dark mode has successfully disabled", "success");

    }
  }





  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} title="Text-Utilities" />


      <Alert alert={alert} />
      <center><div className="container my-3">
        <Textform heading="Enter your text to analyze" mode={mode} showAlert={showAlert} />
        {/* <About/> */}

      </div></center>

    </>
  )
}

export default App
