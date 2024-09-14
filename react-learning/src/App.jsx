import {useState} from "react"



function App() {

  //state
  const [Todos , setTodos] = useState([{
    title : "Go to gym at 6 pm",
    description : "Chest day best day",
    completed : true
  },{
    title : "Stydy web D",
    description : "webRTC",
    completed : false
  }]);

  function addTodo(){
    setTodos([...Todos,{
      title: "new todo",
      description: "new description"
    }])
  }

  return (
    <div>
      <button onClick = {addTodo}>Click</button>
      {Todos.map((e)=>{
        return <Todoss  title = {e.title}  description = {e.description} ></Todoss>
      })}
    </div>
  )
     
}


// component
function Todoss (props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
  }


export default App
