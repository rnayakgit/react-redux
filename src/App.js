
import './App.css';
import LandingPage from './components/Landing';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { increment, decrement } from './actions/validate'
import { useDispatch } from 'react-redux';

function App() {
  const counterSelector = useSelector(state => state.counter);
  const loggedSelector = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const [login, setlogin] = useState('');
console.log(counterSelector);
  const show = (args) => {
    console.log("login Value before :"+ args);
    if (args === false) {
      setlogin('true')
    } else {
      setlogin(args)
    }
  }
   return (
    <div className="App">
       <button onClick={() => { show(loggedSelector) }}>login</button>
       <h1>Counter : {counterSelector}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
         </div>
  );
}

export default App;
