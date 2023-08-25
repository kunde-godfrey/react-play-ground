import React from "react";

interface Props {
  message: String;
}

function Text({ message }: Props) {
  return <div className="m-3">{message}</div>;
}

export default Text;
