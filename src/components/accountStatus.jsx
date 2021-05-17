import React from "react";

const AccountStatus = ({ playerDetails }) => {
  return (
    <div align="right" className="account-container">
      <p>My Account Money</p>
      <p className="money"> {playerDetails.money} $</p>
    </div>
  );
};

export default AccountStatus;
