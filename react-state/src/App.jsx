import './App.css';
import Counter from './Counter';
import CounterUseState from './CounterUseState';
import LikeButton from './LikeButton';
import LudoGame from './LudoGame';

function App() {
  return (
    <>
    <h1>States in React</h1>
    <Counter/>
    <CounterUseState/>
    <br></br>
    <p>Like Button</p>
    <LikeButton/>
    <LudoGame/>
    </>
  )
}

export default App
