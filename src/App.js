import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alertss from "./components/Alertss";


function App() {
  const [mode, setmode] = useState("light"); // IT REPRENSTS whether dark mode is enabled or not.it represents appliaction state

  // y use state dark tha abh light kr diya ku ke y ulta horha tha
  // using condiitom if light then dark and if dark then light and call that function in switch

  //************************************************************************doing black background */
  // i have my SATE in app,js so in ca use document . body means all body not header .style using css and bg to black

  // 1. ALERT STATE:
  const [alert, setalert] = useState(null);
  //function
  const showalert = (message, type) => {
    setalert({
      msg : message,
      typeofalert : type,
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);

    
  }


  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#091e3d";
      showalert("Dark mode has been enabled ","Success");
      document.title= "Textutils - Darkmode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enabled ","Success");
      document.title= "Textutils - lightmode";
       // for chamaknee wlaa ttile

      //  setInterval(() => {
      //   document.title= " text Utils is Amazind";
      //  }, 2000);                                                      

      //  setInterval(() => {
      //   document.title= " Download text Utils on ur DeskTop";
      //  }, 1500);


    }
  };

  return (
    <>
      {/* mode is a props and used as a state and toggle mode is a function  and used as a props and using togglr mode we amke an event and using that event we set our mode and call this event function in switch */}
      <Navbar
        title="Text Utils Blog"
        modes={mode}
        toggleModes={toggleMode}
        aboutText="About "
        
      />
<Alertss Alert={alert}/>

        <div className="container my-3">
          {/* text form ko bta diya ke bahe mera mode ye he like light */}

        <Textform mode={mode} showalert={showalert} heading="Enter The Text To Analyze Below" />
{/* we want about pr jbh click ho to about ajaee to filhal text form ko hata diya  */}
        <About />
      </div>
    </>
  );
}

export default App;
