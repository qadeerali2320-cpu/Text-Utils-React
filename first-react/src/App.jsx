import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar title="Text-Utilities" aboutText= " About Us "/>
<center><div className="container my-3">
    <Textform heading="Enter your text to analyze"/>
        </div></center>
       
         </>
  )
}

export default App
