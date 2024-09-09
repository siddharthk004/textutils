import React, {useState} from 'react'

export default function TextForm(props) {

     
    const HandleUpClick = () => {
        // console.log("Upper case was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase ","success");

    }
     
    const HandleLoClick = () => {
        // console.log("Lower case was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase ","success");
    }

    const HandleclearClick = () => {
        // console.log("Lower case was clicked"+text);
        let newText = '';
        setText(newText);
        props.showAlert("Clear the Text ","success");
    }

    const handleCopy = () => { 
        console.log("I am copy");
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy ","success");
    }

    const HandleOnchange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Delete Extra Space  ","success");
    }

    const [text,setText] = useState(''); 
    // text =  " new text ";   wrong way to change the state
    // setText("new text"); Correct way to change the state

    return (
        <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#163854'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={HandleOnchange} style = {{backgroundColor:-props.mode==='dark'?'grey':'white',
    color: props.mode ==='dark'?'black':'#163854'}} id="MyBox" rows="4"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={HandleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-success mx-2" onClick={HandleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-success mx-2" onClick={handleCopy}>copy Text</button>
        <button className="btn btn-success mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        <button className="btn btn-danger mx-2" onClick={HandleclearClick}>Clear Text</button>
    </div>

    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#163854'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length >0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
} 
