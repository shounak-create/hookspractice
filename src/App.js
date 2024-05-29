import './App.css';
import MyContext from './Context';
import Renders from './Renders';
import UseContexts from './useContexts';
import store from './Employees';
import { Add_Task } from './Employees/employees';

function App() {
  store.dispatch(Add_Task({name:"task1"}))
  console.log("store",store);
  const Context = {
    name:"shounka",
    roll:23,
  }

  return (
    <MyContext.Provider value={Context}>
      <div>
        {/* <UseContexts /> */}
        <Renders />
      </div>
    </MyContext.Provider>
  );
}

export default App;
