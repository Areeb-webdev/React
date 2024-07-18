import { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    //  onsole.log(text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick = () => {
    
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText('Write something here');
  return (
    <div>
      <h1> {props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleDownClick}>Convert to LowerCase</button>
      <div className="container my-4" >
        <h1>Your Text Summary</h1>
    <p> {text.split(" ").length} words , {text.length} character</p>
    <p>{ 0.008 * text.split(" ").length} Minutes Read</p>
    <h2>Preview</h2>
    <p> {text}</p>
      </div>
    </div>
  );
}
