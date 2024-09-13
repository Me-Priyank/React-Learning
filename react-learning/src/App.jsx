import {useState} from "react"



function App() {
  const [count , setCount] = useState(0);

  function press(){
    setCount(count+1);
  }

  return (
    <div>
      <button onClick = {press}>Counter {count}</button>
    </div>
  )
     
}

export default App
