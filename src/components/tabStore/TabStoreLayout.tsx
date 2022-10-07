import React from "react";

type Props = {
  children: React.ReactNode;
};
export const TabStoreLayout: React.FC<Props> = ({ children }) => {
  return <div className="tab-store-wrapper">{children}</div>;
};
