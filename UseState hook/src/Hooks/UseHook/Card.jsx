import React, { use } from 'react'
import { CardTitleApi } from './ConetxApi';

export default function Card() {

    let  name , title ;
   let  data = true;
    if(data){

        let data = use(CardTitleApi);

        name = data.name;
        title = data.title;
    }
  return (
    <div>Card
        Name :{name}
        Title : {title}
    </div>
  )
}
