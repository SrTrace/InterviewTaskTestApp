import './App.css';
import {useSelector} from "react-redux";

function App() {
    const state = useSelector(state=>  state.auth);

    console.log(state);
  return (
    <div className="App">
          Learn React
    </div>
  );
}

export default App;
