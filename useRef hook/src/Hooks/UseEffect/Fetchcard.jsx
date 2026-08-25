import { useEffect, useState } from "react"


export default function Fetchcard() {

   const [apidata , setapidata]  = useState(null)
  
  const fetchData = ()=>{
 
  const API = "https://pokeapi.co/api/v2/pokemon/squirtle";

  
     fetch(API)
     .then((data)=>data.json())
     .then((res)=>{
         setapidata(res)
        console.log(res);
        
     })
     .catch((err)=>{
        console.log(err);
        
     })

  }
    useEffect(()=>{
           

         fetchData();

    }, [])
   // Agar data abhi tak fetch nahi hua (null hai), toh yeh dikhao
  if (!apidata) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
       <main  style={{display:"flex" , justifyContent:"center"}} >

           <div  style={{display: "flex" , alignItems:"center" , flexDirection:"column" , width:"400px"  , height:"300px"  , background:"red"}}>
                   <div>
                    <h3>Name of Card : {apidata.name}</h3>
                   </div>
                   <div>
                    <img src={apidata.sprites.front_default} 
                      alt="pokemon" style={{  backgroundImage:"cover"}}/>
                   </div>

                   <div   style={{display:"flex" ,justifyContent:"center" , gap:"50px" ,marginTop:"20px"}}>
                   
            <h4>Height: {apidata.height}</h4>
            <h4>Weight: {apidata.weight}</h4>
            <h4>Base XP: {apidata.base_experience}</h4>
                   </div>
           </div>
          
       </main>

    </>
  )
}
