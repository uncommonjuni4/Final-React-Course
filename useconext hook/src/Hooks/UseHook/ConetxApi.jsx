import { Children, createContext, use } from "react";

export const   CardTitleApi =  createContext();

 export const CardTitleApiProvider = ({children})=>{

      let name = "Juni";

      let  title = "Welocme to USE hook in React Js ";

    return(
        <CardTitleApi.Provider  value={{name, title}}>
 
       {children}

        </CardTitleApi.Provider>
    )
}




// export const  useCardtitleapi= ()=>{

//     let conext =  use(CardTitleApi);
    
//     if(!conext){
//         console.log("Plz wrape  the chile eleemnt in provuider wraper ");
        
//     }

//     return conext;
// }