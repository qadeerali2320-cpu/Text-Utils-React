import React,{useState}  from 'react'

export default function Textform(props) {
    const HandleUpClick=()=>{
       
        let newtext=text.toUpperCase();
         setText(newtext);
    }
    const HandleLowClick=()=>{
       
        let newtext=text.toLowerCase();
         setText(newtext);
    }
     const HandleOnChange=()=>{
       
       setText(event.target.value);
    }
    const [text,setText]=useState('Enter Text here');
    
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="my-Box" className="form-label"></label>
  <textarea className="form-control" onChange={HandleOnChange} id="my-Box" value={text}  rows="10"></textarea>
</div>

<button  className="btn btn-success mx-1" onClick={HandleUpClick }>Convert To Upper Case</button>
<button className="btn btn-success mx-1" onClick={HandleLowClick }>Convert To Lower Case</button>
    </div>
     <div className="container2 my-3">
          <h2>Your Text Summary</h2>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p> Average time to read the text is {0.008* text.split(" ").length}</p>
          <h3>Your Text Preview</h3>
          <p>{text}</p>
        </div>
    </>
  )
}

