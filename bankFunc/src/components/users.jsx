import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
function Users() {
  const history = useHistory();
  const users = localStorage.getItem("users");
  const userData = JSON.parse(users);

  function goDeposit(target) {
    localStorage.setItem("target", target);
    history.push("/deposit");
  }
  function goWithdraw(target) {
    localStorage.setItem("target", target);
    history.push("/withdraw");
  }
  const renderUsers = () => {
    return (
      <ul className="nav-links2">
        {userData.map((user) => (
          <li key={user.name} value={user.balance}>
            <Button
              className="btn btn-secondary btn-sm"
              key={user.name}
              onClick={(event) => goDeposit(user.name)}
            >
              deposit
            </Button>
            <span className="badge badge-primary m-2">
              <h4>
                {user.name}: balance: {user.balance}
              </h4>
            </span>
            <Button
              className="btn btn-secondary btn-sm"
              key={user.name}
              onClick={(event) => goWithdraw(user.name)}
            >
              Withdraw
            </Button>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <div>
      <h1>Accounts Page</h1>
      {renderUsers()}
    </div>
  );
}

export default Users;
