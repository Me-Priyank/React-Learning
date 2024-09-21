import { useState } from "react"

function App() {

return <div>
  
  <More></More>
  <Header title="2"></Header>
  <Header title="2"></Header>
  <Header title="2"></Header>

</div>

     
}

function More(){
  const [title,setTitle]= useState("hi , i'm Priyank");

  function addTodo(){
    setTitle("hi , i'm" + Math.random());
  }

  return <div>
      <button onClick={addTodo}>c</button>
  <Header title={title}></Header>
  </div>

}

function Header ({title}){
  return <div>
    {title}
  </div>
}





export default App
