import React from "react";
import { useHistory } from "react-router-dom";

const Withdraw = () => {
  const history = useHistory();
  const users = localStorage.getItem("users");
  const target = localStorage.getItem("target");
  const userArray = JSON.parse(users);
  console.log("Deposit users" + users);

  const setAccount = (amount) => {
    const updatedAccounts = userArray.map((item) => {
      let balance = Number(item.balance);
      if (item.name === target)
        return { name: item.name, balance: balance - Number(amount) };
      else return item;
    });
    console.log("Deposit newAccounts" + JSON.stringify(updatedAccounts));
    localStorage.setItem("users", JSON.stringify(updatedAccounts));
  };
  function goUsers() {
    history.push("/users");
  }
  return (
    <div>
      <button className="btn btn-secondary btn-sm" onClick={goUsers}>
        Withdraw From {target}
      </button>
      <input
        type="text"
        width="20"
        onChange={(event) => setAccount(event.target.value)}
      ></input>
    </div>
  );
};
export default Withdraw;
