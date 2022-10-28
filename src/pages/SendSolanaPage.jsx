import React from "react";
import { SolanaInput } from "../components";

const SendSolanaPage = (props) => {
  const { user } = props;

  return <SolanaInput user={user} />;
};

export default SendSolanaPage;
