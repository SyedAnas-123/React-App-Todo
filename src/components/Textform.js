import React, { useState } from "react";

export default function Textform(props) {
  // wanr disable to be a variable

  const handleUpClick = () => {
    //arrow function
    // console.log("button was clicked" ); // fpor only consolelogs we can remove these
    // setText("you havnot click this");
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Uppercase", "Success");
  };

  // 2 button
  const handleDownClick = () => {
    let oldText = text.toLowerCase();
    setText(oldText);
    props.showalert("Converted to Lowercase ", "Success");
  };

  const handleOnChange = (event) => {
    // console.log(" ON chamge")
    setText(event.target.value); // for writing  new text
  };

  const clearup = () => {
    // console.log(" ON chamge")
    setText(""); // for writing  new text
    props.showalert("All text have been Cleared ", "Success");
  };

  const handleExtraSpaces = () => {
    //used regix in java script
    let newText = text.split(/[ ]+/); // if one or more then one spaces is identified it splits the text and join with one space In summary, the handleExtraSpaces function takes a string, splits it into an array using one or more consecutive spaces as the separator, and then joins the array elements back into a string with single spaces as the separator. This effectively removes any extra spaces from the original string.

    setText(newText.join(" "));
    props.showalert("All extra spaces are removed ", "Success");
  };

  const [text, setText] = useState(" ");
  // now all work of changind dark mode and all text into whoite color done in this component
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          {/* chnaging color of text area only so uisnf style and double braxes bcz js ke undr aik object  le rha hun like css in it etc */}
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            rows="8"
          ></textarea>
        </div>
        <button
          type="button"
          disabled = {text.length===0}  // if text have nothing buttons are being disabled .
          className="btn btn-primary mx-2 my-2"
          onClick={handleDownClick}
        >
          Convert to lowerCase
        </button>
        <button
          type="button"
          disabled = {text.length===0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>

        <button
          type="button"
          disabled = {text.length===0}
          className="btn btn-primary mx-2 my-2"
          onClick={clearup}
        >
          Undo all
        </button>
        <button
          type="button"
          disabled = {text.length===0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          {" "}
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="conatiner my-5"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>

        {/* logic for counting no of words in text box and removinf the default string which creates words = 1   */}

        <p>
          {text.split(" ").length > 1 ? text.split(" ").length - 1 : 0} words
          and {text.length} charahters
        </p>

        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        {/* now making logic if text =  empty then  */}
        <p>
          {" "}
          {text.length > 0
            ? text
            : "Nothing to preview...."}{" "}
        </p>
      </div>
    </>
  );
}

// age text khali he to sare buttons kam nn krengen
