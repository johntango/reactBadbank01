import React from "react";

function User() {
  return (
    <div
      style={{
        backgroundColor: "red",
        height: "100px",
      }}
    >
      <h1>{user.name} Account</h1>
      <h3> Balance: {user.balance}</h3>
    </div>
  );
}

export default User;
