import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props)
{
  
  const handleOnChange=(event)=>{
    // console.log("on change fired");
    setText(event.target.value);
  }

  const handleUpperCase=()=>{
    // console.log("upper case button was clicked");
    let newText=text.toUpperCase();
    setText(newText);
  }

  const [text,setText]=useState("");
  
  return (
    <div>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea className="form-control" id="myText" value = {text} placeholder='Enter your text here' onChange={handleOnChange} rows="8"></textarea>
      </div>
      <div className="btn btn-primary" onClick={handleUpperCase}>Convert to Uppercase</div>
    </div>
  );
}

TextForm.propTypes={heading :PropTypes.string.isRequired}

TextForm.defaultProps={heading:"Set heading here"}
