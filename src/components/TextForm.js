import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Your Text");
  const [style, setmystyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btntext, setbtntext] = useState("Light");
  const onupcase = () => {
    console.log(text);
    let x = text.toUpperCase();
    setText(x);
    document.title = "UperCase";
  };
  const onlwrcase = () => {
    let x = text.toLowerCase();
    setText(x);
    document.title = "LowerCase";
  };
  const clear = () => {
    setText("");
    document.title = "Clear Text";
  };
  const onchanges = (event) => {
    console.log("Value are changes");
    setText(event.target.value);
  };
  let btnvar = document.querySelector("#upperBtn");
  let btnvarl = document.querySelector("#lowerBtn");
  let btnvarc = document.querySelector("#clearBtn");
  const dark = () => {
    if (style.color === "black") {
      setmystyle({
        color: "green",
        // backgroundColor: "black",
      });
      document.body.style.backgroundColor = "black";

      btnvar.style.backgroundColor = "green";
      btnvarl.style.backgroundColor = "green";
      btnvarc.style.backgroundColor = "green";
      setbtntext("Dark");
      document.title = "Dark Mode";
    } else {
      setmystyle({
        color: "black",
        backgroundColor: "white",
      });
      document.body.style.backgroundColor = "white";
      btnvar.style.backgroundColor = "gray";
      btnvarl.style.backgroundColor = "gray";
      btnvarc.style.backgroundColor = "gray";
      setbtntext("Light");
      document.title = "Light Mode";
    }
  };
  const copy = () => {
    let text = document.querySelector("#textAreaId");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    document.title = "Text Copied";
  };

  // setText("New Text");8
  return (
    <div>
      <div className="my-5 container rounded-3" style={style}>
        <h1>{props.title}</h1>
        <div className="d-flex justify-content-end">
          <button className="btn border mb-2" onClick={copy}>
            <i class="fa-solid fa-copy"></i>
          </button>
          <button className="btn btn-success mb-2 mx-1" onClick={dark}>
            {btntext}
          </button>
        </div>
        <textarea
          value={text}
          style={style}
          className="form-control"
          onChange={onchanges}
          id="textAreaId"
          rows="8"
        ></textarea>
        <button
          disabled={text.length === 0}
          className="btn btn-dark my-4"
          onClick={onupcase}
          id="upperBtn"
        >
          UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-dark my-4 mx-4"
          onClick={onlwrcase}
          id="lowerBtn"
        >
          LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-dark my-4"
          onClick={clear}
          id="clearBtn"
        >
          Clear
        </button>
        <div style={style}>
          <h1>Text Record</h1>
          <h6>Total Character = {text.length}</h6>
          <h6>
            Total Word=
            {
              text.split(/\s+/).filter((element) => {
                return element.length !== 0;
              }).length
            }
          </h6>
          <h2>Preview</h2>
          <div className="border border-1 border-dark " style={style}>
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
