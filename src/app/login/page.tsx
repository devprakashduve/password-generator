"use client";
import React from "react";

import Login from "../../../components/login";
import UserData from "../../../components/usedData";
import UserContextProvider from "../context/userContextProvider";

const LoginPage = () => {
  return (
    <UserContextProvider>
      <Login />
      <UserData />
    </UserContextProvider>
  );
};

export default LoginPage;
