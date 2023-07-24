import React  from "react";

export default function About(props) {
  // const [myStyle, setmyStyle] = useState({
  //   //making an java script object first and now we change it and using it like a state
  //   color: 'black ',
  //   backgroundColor: 'white',
  // });

  //1: not taking state og =f my style  we can also use as a variable and send and send objects and using logic of dark mode on about section .
//2 : also send mode to about componet take usko pta to ho mode black he ya white ?


  let myStyle ={    
    color : props.mode === 'dark' ? 'white' : '#042743',    //we write logic for dark mode on about section 
    backgroundColor :props.mode==='dark'? 'rgb(36 74 104)' : 'white',
     border: '2px solid',                                       //taking boder conditionally bcz agr mode light ho to border black wrna white condition de rhe hen
     borderColor: props.mode === 'dark' ? 'white' : '#042743'

  }




  return (
    // calling of that object
    // bcz dont want the color of the upee dark mode logic to this just jbh bblack hoga to normal background jesa color iska hojaeega herading ka
    <div className="container" style={ {color : props.mode === 'dark' ? 'white' : '#042743'}}> 
      <h1 className="my-5 active ">About Us</h1>
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

     
     
    </div>
  );
}


// 1.dark mode ka jo about me buttto n he js se dark mode enable hoga wo sb hata den gen...  ager dikhna ho dusree flder em ja kr dikhlen
// 2: ToGGLE STYLE FUNCTION BH HATA DIYA KU KE WO SIRF DARK MODE KE LIYE THA KHALI.

