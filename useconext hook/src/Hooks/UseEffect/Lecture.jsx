import { useEffect, useState } from "react"


export default function Lecture() {

    const [cout , setcout ]  = useState(0) ;




   function increase(){
      setcout(cout + 1);

   }



   useEffect((

   )=> {

       console.log("Her;pppp");
   }, [cout])


   
  return (
    <>
    
     <h1>Welcome  to UseEffect Hook </h1>
       <p>
         Cout : {cout}
       </p>
       <button   onClick={increase}>Click to Count Increase</button>
    </>
  )
}
