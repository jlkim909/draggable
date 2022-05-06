import Draggable from "./components/Draggable";
import React, { useRef } from 'react';

function App() {
  const handle = useRef(null)
  return (
    <Draggable handleRef={handle} onMove={(x,y)=> console.log(x,y)}>
      <div className=" w-[100px] h-[100px] bg-green-300">
        <button ref={handle}>Move</button>
      </div>
    </Draggable>
  );
}

export default App;
