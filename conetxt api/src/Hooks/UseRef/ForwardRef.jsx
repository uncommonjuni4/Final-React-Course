import { useRef } from "react"


export default function ForwardRef() {


    const name = useRef(null);
    

    const handlesubmit=(e)=>{
      e.preventDefault();

      console.log(name.current.value);
      
    }
  return (
    <>
    
       
       <form  onSubmit={handlesubmit}>

        
      <Card     ref ={name} />
       </form>

    </>
  )
}








// const Card = forwardRef((props , ref)=>{
//   return (
//     <>
    
//       <input type="text"   ref={ref} />

//       <button>submit</button>
//     </>
//   )
// })

function  Card({ref}){

    return(
        <>
        
       
       <input type="text"   ref={ref} />

      <button>submit</button>
        
        </>
    )
}


