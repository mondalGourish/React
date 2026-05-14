import "./App.css";
import Lottery from "./Lottery";
import { sum } from "./helper";

function App() {

  //passing function as props help in increasing reuseability of the code(for example if the winning condition at some point of time only changing inside this function will do the work)
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };
  return (
    <>
      <Lottery n={3} winCondition={winCondition} />
    </>
  );
}

export default App;
