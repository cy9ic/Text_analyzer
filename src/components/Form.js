import React,{useState} from 'react'
import PropTypes from 'prop-types'

// import { getByDisplayValue } from '@testing-library/react';

export default function Texttform(props) {
  const onClickhandle = ()=>{
    // console.log("onClickhandle initiated for uppercase conversion");
    let newText = text.toUpperCase();
    setText(newText);
    props.setAlert("Converted to uppercase!",'success');  

  }

  const handlelowclick = ()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.setAlert("Converted to lowercase!",'success');  
  }
  
  
  const onchangehandler = (event)=>{
    setText(event.target.value);
  
  }
  const cleartext = ()=>{
    setText("");
    props.setAlert("Textarea cleared!",'success');  
  }

  const copyclp= ()=>{
    navigator.clipboard.writeText(text)
    // alert("Copied to clipboard successfully!")
    props.setAlert("Copied to clipboard!",'success');  

  }
  
  const handleextraspace = ()=>{
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "))
    props.setAlert("Removed extra spaces!",'success');  
  }


  
//  User state function to analyze the text. 
  const [text,setText] = useState('');
  
  return (
    
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
    <div className="mb-3"  >
    <b><i><u><h1 style={{margin:6,padding:10,textAlign:'center'}}>{props.heading}</h1></u></i></b>
</div>
<div className="mb-3">
  <h3>
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.lable} :</label></h3>
  <textarea className="form-control" value={text} id="exampleFormControlTextarea1" rows="7" onChange={onchangehandler} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'black':'black'}}></textarea>
<br/>
<div>
  <button className={`btn btn-${props.mode==='light'?'secondary':'dark'} mx-1`} onClick={onClickhandle} > Convert to upper case</button>
  <button className={`btn btn-${props.mode==='light'?'secondary':'dark'} mx-1`}  onClick={handlelowclick}> Convert to lower case</button>
  <button className={`btn btn-${props.mode==='light'?'secondary':'dark'} mx-1`}  onClick={cleartext}> Clear Textarea</button>
  <button className={`btn btn-${props.mode==='light'?'secondary':'dark'} mx-1`}  onClick={copyclp}>Copy to Clipboard</button>
  <button className={`btn btn-${props.mode==='light'?'secondary':'dark'} mx-1`}  onClick={handleextraspace}>Remove ExtraSpaces</button>
  </div>
</div>
</div>

<div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}} >
    <h1> Your text summary :</h1>
    <p>{ text.split(" ").length} words and {text.length} characters</p>
    <p>{text.split(" ").length * 0.008} minutes to read the text</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview it here!"}</p>
    </div>

</>

  )
}
