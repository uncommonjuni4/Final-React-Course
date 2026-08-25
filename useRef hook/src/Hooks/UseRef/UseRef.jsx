import { useRef } from "react";

export default function UseRef() {
    const password = useRef(null);

    const  handlesubmit = (e)=>{
        e.preventDefault();


        console.log(document.getElementById("name"));
     
        console.log(password.current.value);
        

        
    }
  return (
    <>
    

    
    <form   onSubmit={handlesubmit}>

     <input type="text"  id = "name"  />
     <input type="text"  id = "name"  ref={password}  />
      <button>Submit</button>
    </form>
    
    
    
    
    
    
    </>
  )
}
