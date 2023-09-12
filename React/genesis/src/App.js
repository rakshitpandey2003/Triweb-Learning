import { useState } from "react";
import First from "./components/First";
import Drop from "./components/Second";

function App() {
  const[open , setopen] = useState(false);
  return (
    <div>
      <Drop />
      {open?<First my="MY"/>:null}
    </div>
  );
}

export default App;
