import { useState } from "react";
import First from "./components/First";
import Drop from "./components/Second";

function App() {
  const[open , setopen] = useState(true);
  const Modalhandler = ()=>{
    setopen(false);
  }
  const openModalhandler = ()=>{
    setopen(true);
  }
  return (
    <div>
      <Drop />
      {open?<First my="MY" toggle = {Modalhandler}/>:null}
      <button onClick={openModalhandler}>Open</button>
    </div>
  );
}

export default App;
