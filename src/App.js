import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  // const [count,setCount] = useState(0);
  // const [name,setName] = useState("")

  // const increment=()=>{
  //   setCount(count+1)
  // }

  // const changeName = (e)=>{
  //   setName(e.target.value)
  // }

  return (
    <GlobalProvider>
      {/* <p>My current count{count}</p>
      <button onClick={increment}>increment</button><br/>
      <input type="text" value ={name} placeholder="Name" onChange={changeName} />
      <p>{name}</p> */}

      <Header />
      <div className="container">
        <Balance />
      </div>

      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
