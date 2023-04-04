import { useState } from "react";

interface Props {
  children: string;
  maxChar?: number;
}
const Expandable = ({ children, maxChar = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxChar) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChar) + "...";
  return (
    <p>
      {text}
      <button
        className="btn btn-primary"
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default Expandable;
