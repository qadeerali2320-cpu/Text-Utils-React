import React,{useState}  from 'react'

export default function Textform(props) {
<<<<<<< HEAD
  const [text,setText]=useState('Enter Text here');
  const [isSpeaking,setIsSpeaking]=useState(false);
=======
>>>>>>> 369dff8d1e9d6003bd068c05fbecf5e348adab8d
    const HandleUpClick=()=>{
       
        let newtext=text.toUpperCase();
         setText(newtext);
    }
<<<<<<< HEAD
    const HandleClearText=()=>{
       
        let newtext="";
         setText(newtext);
    }
    const HandleEmailText=()=>{
       
        const emailRegex= /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
        const foundEmail=text.match(emailRegex);
        if(foundEmail)
          setText("Found Emails: "+foundEmail.join(", "));
        else
         setText("No Email found in the text");
    }
  let  listen=true;
    
    const HandleSpeak=()=>{
      if(text.trim()==""){
        setText("Please Enter Some Text ");
        return;
      }
      if(listen==false){
        setText("Speech Is stopped ");
        return;
      }
      window.speechSynthesis.cancel();
      const speech=new SpeechSynthesisUtterance();
      speech.text=text;

      window.speechSynthesis.speak(speech);
     // setText(listen)
  }
 const HandleStopListening=()=>{
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }
     const HandleOnChange=(event)=>{
       
       setText(event.target.value);
    }
    
=======
    const HandleLowClick=()=>{
       
        let newtext=text.toLowerCase();
         setText(newtext);
    }
     const HandleOnChange=()=>{
       
       setText(event.target.value);
    }
    const [text,setText]=useState('Enter Text here');
>>>>>>> 369dff8d1e9d6003bd068c05fbecf5e348adab8d
    
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="my-Box" className="form-label"></label>
  <textarea className="form-control" onChange={HandleOnChange} id="my-Box" value={text}  rows="10"></textarea>
</div>

<button  className="btn btn-success mx-1" onClick={HandleUpClick }>Convert To Upper Case</button>
<<<<<<< HEAD
<button className="btn btn-success mx-1" onClick={HandleClearText }>Clear Text</button>
<button className="btn btn-success mx-1" onClick={HandleEmailText }> Email In text</button>
<button className="btn btn-success mx-1" onClick={HandleSpeak}>Listen to Text</button>
<button className="btn btn-success mx-1" onClick={HandleStopListening}>Stop Listening to Text</button>
=======
<button className="btn btn-success mx-1" onClick={HandleLowClick }>Convert To Lower Case</button>
>>>>>>> 369dff8d1e9d6003bd068c05fbecf5e348adab8d
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

