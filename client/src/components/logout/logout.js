import React, { useEffect } from "react";

export const Logout = ({ setToken }) => {
  useEffect(() => {
    let token = localStorage.clear("Token");
    setToken(token);
  });
  return (
    <div>
      <h2>You have been loged out.</h2>
    </div>
  );
};
