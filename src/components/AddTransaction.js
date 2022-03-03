import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { v4 as uuid } from "uuid";

export const AddTransaction = () => {
  const [data, setData] = useState({
    text: "",
    amount: 0,
  });

  const { addTransaction } = useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: uuid(),
      text: data.text,
      amount: parseInt(data.amount),
    };

    addTransaction(newTransaction);

    setData({ text: "", amount: 0 });
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={data.text}
            onChange={handleChange}
            placeholder="Enter description"
            name="text"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={data.amount}
            onChange={handleChange}
            placeholder="Enter amount..."
            name="amount"
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};
