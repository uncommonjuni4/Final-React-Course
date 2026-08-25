import { useId } from "react"


export default function UseId() {


    ////  how make   custom  id  whwn we need  small number of   unique id 

    //  const  Userid =  useId();
    //  const  passwordid =  useId();
    //  const  emailid =  useId();

   
     /////when  we need moree more id 

     let   id =   useId();
     

  return (
    <>
     {/* <div>
        <label htmlFor={Userid}>userName :</label>
        <input type="text" name="usename" id={Userid} />
     </div>
     <div>
        <label htmlFor={emailid}>Email :</label>
        <input type="email" name="Email" id={emailid} />
     </div>
     <div>
        <label htmlFor={passwordid}>Password :</label>
        <input type="password" name="Password" id={passwordid} />
     </div> */}



     {/* //////when nned more id  */}



     <div>
        <label htmlFor={id + "UserName"}>userName :</label>
        <input type="text" name="usename" id={id + "UserName"} />
     </div>
     <div>
        <label htmlFor={id + "Email"}>Email :</label>
        <input type="email" name="Email" id={id + "Email"} />
     </div>
     <div>
        <label htmlFor={id + "Password"}>Password :</label>
        <input type="password" name="Password" id={id + "Password"} />
     </div>
    </>
  )
}
