import { useContext } from "react"
import { BioContext } from "./Store";

export default function Child1() {

    const {name} = useContext(BioContext);
  return (
    <>
      <p>I am  Child1 .And  MY name id s  {name} </p>
        </>
  )
}
