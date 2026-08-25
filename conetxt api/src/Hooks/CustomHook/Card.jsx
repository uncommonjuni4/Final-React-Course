import { useBioContext } from "./CustomHook";

export default function Card() {
  const { title } = useBioContext();

  return (
    <div>Title : {title}</div>
  );
}