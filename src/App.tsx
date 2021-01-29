import React from "react";
import "./App.scss";

type Props = {
  children: React.ReactNode;
};
const App: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};
export default App;
