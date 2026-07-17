import React, { useState } from 'react'

export default function Textform(props) {

  const [text, setText] = useState('Enter Text here');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const HandleUpClick = () => {
   if(text.length===0)
     return props.showAlert(" There is no text to convert ", "Warning");
    
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Successfully converted to upper case", "success");
  }

  const HandleClearText = () => {

    let newtext = "";
    setText(newtext);
    props.showAlert("Successfully clear the text", "success");
  }
  const HandleEmailText = () => {

    const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
    const foundEmail = text.match(emailRegex);
    if (foundEmail) {
      setText("Found Emails: " + foundEmail.join(", "));
      props.showAlert("Successfully found the e-mail", "success");
    }
    else {
      setText("No Email found in the text");
      props.showAlert("No E-mail in the text", "warning");
    }
  }
  let listen = true;

  const HandleSpeak = () => {
    if (text.trim() == "") {
      setText("Please Enter Some Text ");
      props.setAlert("No text to listen", "warning");
      return;

    }
    if (listen == false) {
      setText("Speech Is stopped ");
      props.setAlert("Speech is stopped", "success");
      return;
    }
    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;

    window.speechSynthesis.speak(speech);
    // setText(listen)
  }
  const HandleStopListening = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }



  const HandleLowClick = () => {
  if(text.length===0)
    return props.showAlert(" There is no text to convert ", "Warning");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.setAlert("Successfully converted to lower case", "success");
  }
  const HandleOnChange = (event) => {

    setText(event.target.value);
  }



  return (
    <>
      <div className="Container" style={

        { color: props.mode === 'dark' ? 'white' : 'black' }}

      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="my-Box" className="form-label"></label>
          <textarea className="form-control" onChange={HandleOnChange} style={{
            backgroundColor: props.mode === 'dark' ? '#333' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
          }} id="my-Box" value={text} rows="10"></textarea>
        </div>
        <button className="btn btn-success mx-1" onClick={HandleUpClick}>Convert To Upper Case</button>
        <button className="btn btn-success mx-1 my-1" onClick={HandleClearText}>Clear Text</button>
        <button className="btn btn-success mx-1" onClick={HandleEmailText}> Email In text</button>
        <button className="btn btn-success mx-1" onClick={HandleSpeak}>Listen to Text</button>
        <button className="btn btn-success mx-1" onClick={HandleStopListening}>Stop Listening to Text</button>
        <button className="btn btn-success mx-1" onClick={HandleLowClick}>Convert To Lower Case</button>

      </div>
      <div className="container2 my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>
        <p>
          <p>{text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.length} characters</p>
        </p>
        <p> Average time to read the text is {0.008 * text.split(" ").length}</p>
        <h3>Your Text Preview</h3>
        <p>{text.length > 0 ? text : "Enter something in the textBox above to preview it here"}</p>
      </div>

    </>
  )

}

