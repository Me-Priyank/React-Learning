import { useState } from "react"
import {memo} from "react" // To prevent unneccesary re-rendering of all components
function App() {
const [title,setTitle]= useState("hi , i'm Priyank");

function addTodo(){
  setTitle("hi , i'm" + Math.random());
}


return <div>
  <button onClick={addTodo}>c</button>
  <Header title={title}></Header>
  <Header title="2"></Header>
  <Header title="2"></Header>
  <Header title="2"></Header>

</div>

     
}


const Header = memo( ({title})=>{
  return <div>
    {title}
  </div>
}
)





export default App
