import {useState} from "react"



function App() {
  const [count , setCount] = useState(0);



  return (
    <div>
      <CustomBtn count = {count}  setCount = {setCount}></CustomBtn>
    </div>
  )
     
}

function CustomBtn(props){
  function press(){
    props.setCount(props.count+1);
  }

return <button onClick={press}>Counter {props.count}</button>
   
  }


export default App
