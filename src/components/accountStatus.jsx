import React from "react";

const AccountStatus = ({ playerDetails }) => {
  return (
    <div align="right" className="account-container">
      <p style={{ color: "white" }}>My Bank Account</p>
      <p className="money"> {playerDetails.money} $</p>
    </div>
  );
};

export default AccountStatus;
