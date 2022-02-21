import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function CaseConvert(props)
{
  const [text, setText] = useState("");

  const handleOnChange=(event)=>{
     setText(event.target.value);
   }

  const handleUpperCase=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }

  const handleLowerCase=()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleAlternateCase=()=>{
    var newText;
    var chars = text.toLowerCase().split("");
    for (var i = 1; i < chars.length; i += 2) {
      chars[i] = chars[i].toUpperCase();
    }
    newText=chars.join("");
    setText(newText);
  }

  const handleSentenceCase=()=>{
    var newText;
    var chars=text.trim().split(".");
    for (var i=0;i<chars.length;i++){
      if (chars[i][0] === " "){
        chars[i]=chars[i].charAt(1).toUpperCase()+chars[i].slice(2);
      }
      chars[i]= " " + chars[i].charAt(0).toUpperCase()+chars[i].slice(1);
    }
    newText=chars.join(".").trim();
    setText(newText);
  }

  const handleClear=()=>{
    setText("");
  }
  const calcNoOfWords=(text)=>{
    if (text.length>=1){
      let noOfWords=text.trim().split(/\s/).length;
      return noOfWords;
    }
    return 0;
  }
  const calcNoOfLines=(text)=>{
    if (text.length>=1){
      let lines = text.trim().split(/\r\n|\r|\n/);
      return lines.length;
    }
    return 0;
  }
  
  return (
    <>
      <div className="container">
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" id="myText" value = {text} placeholder='Enter your text here' onChange= {handleOnChange} rows="8"></textarea>
      </div>
      <div className="btn btn-primary" onClick={handleUpperCase}>Convert to upper case</div>
      <div className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to lower case</div>
      <div className="btn btn-primary mx-1" onClick={handleAlternateCase}>Alternating Case</div>
      <div className="btn btn-primary mx-1" onClick={handleSentenceCase}>Sentence Case</div>
      <div className="btn btn-primary mx-2" onClick={handleClear}>Clear</div>
      </div>
      <div className="container">
        <div className="mx-2 my-2">
          <p>Word Count: {calcNoOfWords(text)} | Line Count: {calcNoOfLines(text)}</p>
        </div>
      </div>
    </>
  );
}

CaseConvert.propTypes={heading :PropTypes.string.isRequired}

CaseConvert.defaultProps={heading:"Set heading here"}
