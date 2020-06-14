import React from "react";
import { useHistory } from "react-router-dom";
function SetupBank() {
  const history = useHistory();
  const userData = [
    { name: "john", balance: 1 },
    { name: "abel", balance: 0 },
    { name: "anne", balance: 0 },
    { name: "joan", balance: 0 },
  ];

  localStorage.setItem("users", JSON.stringify(userData));

  const renderUsers = () => {
    return (
      <ul className="nav-links2">
        {userData.map((user) => (
          <li key={user.name} value={user.balance}>
            {JSON.stringify(user)}
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div
      style={{
        backgroundColor: "red",
        height: "100px",
      }}
    >
      {renderUsers()}
      <h1>Bank is Setup </h1>
    </div>
  );
}

export default SetupBank;
