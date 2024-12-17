import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}
const layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default layout;
