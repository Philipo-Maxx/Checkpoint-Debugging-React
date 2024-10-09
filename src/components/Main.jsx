import React from "react";

const Main = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        height: "100vh",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Main;
