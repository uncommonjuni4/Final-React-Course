import { createContext, useState } from "react";


export  const CouterApi  = createContext();


export  const CounterPRovide = ({children})=>{

    const    [count ,setcount] =  useState(0);

    const  incrase = ()=>{
   
          setcount(count + 1)

    }
    const decrease = ()=>{
   
          setcount(count - 1);

    }

       return( 
        <>
        
         <CouterApi.Provider    value={{count  , incrase  , decrease}}>
            {children}
         </CouterApi.Provider>
        
           
        </>
       )
}