// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CouterWithReducer from './Hooks/UseReducer/CouterWithReducer'
// import { CardTitleApiProvider } from './Hooks/UseHook/ConetxApi'
// import Card from './Hooks/UseHook/Card'
// import { BioProvide } from './Hooks/CustomHook/CustomHook'
// import Card from './Hooks/CustomHook/card'
// import { CounterPRovide } from './Hooks/ConTextApi/Project/CounterAPi'
// import CounterUi from './Hooks/ConTextApi/Project/CounterUi'
// import { BioProvider } from './Hooks/ConTextApi/Store'
// import Child1 from './Hooks/ConTextApi/Child1'
// import UseId from './Hooks/UseId/UseId'





createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //     <UseId />
  // </StrictMode>,

  // <BioProvider>
  
  //    <Child1 />
  // </BioProvider>


  // <CounterPRovide >
    
  //   <CounterUi />
        
  // </CounterPRovide>



  // //  for custom   hook
  //   <BioProvide>
  //    <Card />
  //   </BioProvide>

  /// for use of use      hook 

  // <CardTitleApiProvider>
  //      <Card />
  // </CardTitleApiProvider>


  //for useReducerb hook

  <CouterWithReducer />
    
)
