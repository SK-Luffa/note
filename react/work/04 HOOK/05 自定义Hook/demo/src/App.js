import useAllStudent from "./myHooks/useAllStudent";
import useTimer from "./myHooks/useTimer";

function Last(){
  const lasts=useAllStudent();
  console.log(lasts)
  return <div>{lasts} </div>
}
function Timer(){

 useTimer(()=>{
    console.log("hahahha")
  },3000)
 
}
function App() {
  return (
    <div className="App">
    
    <Last></Last>
    <Timer></Timer>
    </div>
  );
}

export default App;
