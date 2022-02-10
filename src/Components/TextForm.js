import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props)
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
  const handleClear=()=>{
    setText("");
  }
  const calcNoOfWords=(text)=>{
    if (text.length>=1){
      let noOfWords=text.trim().split(" ").length;
      return noOfWords;
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
      <div className="btn btn-primary mx-2" onClick={handleAlternateCase}>Alternating Case</div>
      <div className="btn btn-primary mx-2" onClick={handleClear}>Clear</div>
      </div>
      <div className="container">
        <div className="mx-2 my-2">
          <p>Word Count: {calcNoOfWords(text)}</p>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes={heading :PropTypes.string.isRequired}

TextForm.defaultProps={heading:"Set heading here"}
