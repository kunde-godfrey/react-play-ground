import React, { Children } from "react";
interface Props {
  children: string;
  title: string;
}

function Heading({ children, title }: Props) {
  return (
    <>
      <h1 className="bg-info justify-content-center p-3 d-flex w-75 mb-4">
        {title}
      </h1>
      <p className="mb-2">{children}</p>
    </>
  );
}

export default Heading;
