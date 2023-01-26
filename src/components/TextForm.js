import React, {useState} from 'react';
import { useRef } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const textareaRef = useRef(null);
  const [copyText, setCopyText] = useState("Copy Text")

  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) =>{
    setText(event.target.value);
    setCopyText('Copy Text')
  };

  const handleClearText = () =>{
    let newText = ''
    setText(newText)
  };

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    // let newText = text.split(' ').join(' ')
    setText(newText.join(" "))
  }

  const handleCopyText = () => {
    navigator.clipboard.writeText(textareaRef.current.value)
    
    // textareaRef.current.select();
    // document.execCommand("copy");

    if (copyText === "Copy Text"){
      setCopyText("Copied!")
      // setCopyText('Copy Text')
    }

  }


  const CountWords = ()=>{
    return text.split(/\s+/).filter((element)=>{return element.length!==0}).length; 
  }

  return (
    <div className="container pt-3 pb-3" style={props.myStyle}>
      <div className='container'>
          <h1>{props.heading}</h1>
          <button disabled={text.length===0} className="btn btn-dark btn-sm mx-2 my-2" style={props.myStyle} onClick={handleCopyText} onChange={handleOnChange}>{copyText}</button>
          <div className="mb-3">
              <textarea ref={textareaRef} style={props.myStyle} className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} style={props.btnStyle} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
          <button disabled={text.length===0} style={props.btnStyle} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
          <button disabled={text.length===0} style={props.btnStyle} className="btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear</button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{CountWords()} words and {text.length} characters</p>
        <p>Read Time: {CountWords()/250} Minutes</p>
      </div>
    </div>
  )
}
