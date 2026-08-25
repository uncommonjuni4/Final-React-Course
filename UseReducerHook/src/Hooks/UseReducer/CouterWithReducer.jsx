import React, { act, useReducer } from 'react'

export default function CouterWithReducer() {

  const intailState ={
     count : 0 ,
     de :2 ,
     d5:4,
  }


  
  const   reducer  = (state  ,actions)=>{
    console.log(state , actions);
    // 
  //   if(actions.type  === "Incerment"){
  //     return {count:state.count +1 }
  // }else if (actions.type  === "Decerment"){
  //    return {count : state.count -1};
  // }else if (actions.type  === "Reset"){
  //   return {count : 0}
  // }

  // with help of switch 


   switch(actions.type){
    case "Incerment":
      return {...intailState, count : state.count +1 }

      case  "Decerment":
        return {...intailState ,count : state.count -1}


        case "Reset":
          return {...intailState,count : 0}
   }
    
  }
  
  const [state , dispatch]  = useReducer(reducer  ,  intailState);

  return (
    <>
    
    
    <h1>Counter with User Reducer Hook </h1>

    <h2>Couter :{state.count} </h2>
    <button  onClick={()=>dispatch({type :"Incerment"})}>Incerment</button>
    <button onClick={()=>dispatch({type :"Decerment"})}>Decrement</button>
    <button onClick={()=>dispatch({type :"Reset"})}>Reset</button>

    </>
  )
}
