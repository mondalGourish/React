import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery({ n, winCondition }) {

  let [ticket, setTicket] = useState(genTicket(n));
  let isWinning = winCondition(ticket);

  let buyTicket = ()=>{
    setTicket(genTicket(n));
  }

  return (
    <div>
      <h1>Lottery Game! Try your luck</h1>
      
        <Ticket ticket={ticket}/>
      <button onClick={buyTicket}>Buy Ticket</button>
      <h3>{isWinning ? "Congratulation you won" : "Try again"}</h3>
    </div>
  );
}
