
import './App.css';
import ArowFuns from './component/ArowFuns';
import ClassComponet from './component/ClassComponet';
import DemoState from './component/DemoState';
import FunComponet from './component/FunComponet';
import MenberInfo from './component/MenberInfo';
const menber = {
  path :"/logo192.png",
  name:"Giang"
}
function App() {
  return (
    <div className="App">
       {elment }
      <FunComponet name="devmaster" component="1324"></FunComponet>
      <ClassComponet name="Giang" last="Luân"></ClassComponet>
      <ArowFuns></ArowFuns>
      <MenberInfo info={menber}/>
      <DemoState></DemoState>
    </div>
  );
} 
function formarName(user){
  return user.firstName+ ' '+ user.lastName;
}
const user={
  firstName:'nguyen duy',
  lastName:'quang'
};
const name='devmastter';
const elment=(
  <div>
    <h1>Hello {formarName(user)}</h1>
    <p>welcome to {name}</p>
  </div>
)

export default App;
