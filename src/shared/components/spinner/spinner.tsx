import React from "react";

type SpinnerProps = {
  element?: React.ReactNode;
};

export const Spinner: React.FC<SpinnerProps> = ({ element }) => {
  if (element) return <>{element}</>;

  return <div>Loading ...</div>;
};
