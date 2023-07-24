import React from 'react'
// 1.we are sending props for alert
// 2 .we are making satte of alert in app.js like wwe have created for modes
function Alertss(props) {
  return (
  
    <div style={{height:'50px'}}>
    {
   props.Alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
 <strong > {props.Alert.typeofalert} </strong> :  {props.Alert.msg}
 
</div>}

</div>

    
 
      
  
  )
}

export default Alertss








//1: malikngn alert Component, passing props of alert , making satte of alert in App.js.
// 2 : we are making alert an object  and then write a method of  show alert() ,after that we are settign alert
// 3: we have just passsd a fucntion with bparameters to give value in it {showalert = (message, type)} like that it is the same function now we are setting setalert bt passing the message and its type=> type isin bootstrap of alert of success , warning alert of different colors
// 4 :   setalert({
//      msg : message,
//      typeofalert : type,
 //   })      ( setting alert and used {} inside () bcz we are usinf jv  declaring avriables and save hte value of parameters in these variables noe alert have become an object firstly it is null )

 // 5: noe passing the state alert which is null to the alert in app.js to render what ever we set alert <Alertss Alert={alert}/>
// 6: now strong > {props.Alert.type} </strong>: {props.Alert.msg} in alert.js if type is success then it renders sucess and if msgthen it also renderws after success
// 7 : we wan ther alert msg in when we enabled or disabled dark or lightmode so we use thwe function in them 
  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setmode("dark");
  //     document.body.style.backgroundColor = "#091e3d";
  //    {{{{showalert("Dark mode has been enabled ", "success");}}}}}  //
  //   } else {
  //     setmode("light");
  //     document.body.style.backgroundColor = "white";
  //    {{{{ showalert("Dark mode has been enabled ", "success");}}}}n  //

  //   }
/// 8 : now it is displaying error null so we will use a logic like we also can do the if else statement but we prefer the the logiv which mostly comminuty used      {
  
//   =>    props.Alert &&   <=   <div className="alert alert-warning alert-dismissible fade show" role="alert">
// <strong > {props.Alert.type} </strong> :{props.Alert.msg}
//  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>
// }    && operator used klrengen as me to sb se phlee jo iske chzlikhii hue bhe wo evaluate hogi if it nulss aghe loi bh chez evaluate nh hogi eg;
// AGR KOI TEXT AREA PR CLICK KR KE KOI CHZ CAPITAL YA DARK MODE ENABLE NH KREGA TO ALERT KI VALUE NULLHI RAHEGI OR AGR KREGA TO SETALERT RUN  HOGA JO SHOW ALERT KE FUNCTION ME HEW OR JAHAN JAHAN SHOW ALERT LIKHA HAU HE WAHAN PR YE CHZ EVALUATE HOAJEE JESE BUTTTONS ME LOWER TO UPPER OR ETC ME   
//0 : ABH COLOR CHANGE KRNA HE TO  JO ALERT.MSG.TYPE KA CODE HE WO UPR CLASSNAME EM CHALEGA WARNING KI JAHAN SUCCES AEEGA TO CJANHE HOJAEEGA hm direct sucees kr ke bh kr skte hen .

//10: abh hnhe sucees ke s ko capital krns ths to m  n direstc type me ja kr S capital kr diya abkin harry ne function bana klr kra he to js se {video 13 11.20 }pr ja kr dikh lo

//11 :padddinf show aklert in tetx form to see the changes we made when cpaitalize the text {  <Textform mode={mode} showalert={showalert} heading="Enter The Text To Analyze Below" /> } 

// 12 : understanf the logic of priopsa in upr point we have declarred a props showalert = {showalert} <= whic is a fucntion we call it like a props that fiorst show alerrt is a variable and inside it it have a text so in etxt form we call it like props.showalert to dsiplay what ever in showalert variable  {} props. showalert("All text have been Cleared ","Success");}and it only shows when the show alert have some text and type ]

//13 : now want alert to disapper after some time so used set timer in app.js 
// after 1 sec it is null setTimeout(() => {
//   setalert(null)
// }, 1500);





// ****************************************************************************************
// 1: we wqnt that ke layout change na hO pae to put a div contaimer