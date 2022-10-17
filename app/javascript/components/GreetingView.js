import React from "react";
import { useSelector } from 'react-redux';
import Message from "./Message";

const GreetingView = () => {
  const { message } = useSelector((state) => state.messages);

  return <Message message={message} />
}

export default GreetingView;
