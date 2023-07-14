import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    //making an java script object first and now we change it and using it like a state
    color: 'black ',
    backgroundColor: 'white',
  });

//   we also want to use btn text as a state and just showing we gonna use multiple states
const [btnText, setbtnText] = useState("Enable Dark Mode");
// so now we are alos gonna change text content so if we call it in togglestyle and set text to which we wanna use like enable dark mode or not as per the if conditions


//***********************************************************************************8************ */
// first we use logic foor  enablinng the dark mode and in the btn text we write disable dark mode 
// in this i am saying if mystyle color is black then produce it white and change bg color yo balck 
  const togglesStyles= () =>{
    if(myStyle.color === 'black'){
        setmyStyle({
            color: 'white',
            backgroundColor : 'black',
            border: ' 1px solid white'

        })
        setbtnText("Disable DarkMode")
    }
    else{
        setmyStyle({
            color:'black',
            backgroundColor: ' white',
        })
        setbtnText("Enable Dark Mode")
    }



        
  }
  

  return (
    // calling of that object
    <div className="container" style={myStyle}>
      <h1 className="my-5">About Us</h1>
      {/* using style */}
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              //   here csss
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            {/* here css */}
            <div className="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              // here csss
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            {/* here css */}
            <div className="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              // here css
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            {/* here csss */}
            <div className="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      {/* using dark mode logic */}
      <div className="container my-4">

        {/* making an event on click and makes its arrwo function and define logic in it  */}
        <button onClick={togglesStyles} type="button" className="btn btn-primary">{btnText}
        </button>   
        {/* JUST CALL HE DEFAULT VALUE OF BTN TETX IN THIS BUTTON  */}
      </div>
    </div>
  );
}
