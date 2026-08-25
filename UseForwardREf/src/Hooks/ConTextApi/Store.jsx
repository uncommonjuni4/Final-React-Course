

// step 1 

import { createContext } from "react";

// create  context  first 

 export  const   BioContext = createContext();



// step   2  :   make the     provider  

export  const BioProvider  = ({children})=>{
 
       let  name  = "wELOCME TO Conetxt Api ";    
    return(
        
        <BioContext.Provider     value = {{name}} >

          {children}

        </BioContext.Provider>
    )


 }