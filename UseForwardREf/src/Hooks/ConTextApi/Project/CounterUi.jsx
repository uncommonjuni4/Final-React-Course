import { useContext } from "react"
import { CouterApi } from "./CounterAPi"


export default function CounterUi() {

    const  {count , incrase   , decrease }  = useContext(CouterApi);
  return (
    <>
     
    <p>Welocome to Couter App with Help of ConTExt Api </p>
      <h3>Count : {count}</h3>
      <button onClick={()=>incrase()}>Increasec</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}
