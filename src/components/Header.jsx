import React from "react";

const Header = ({ title }) => {
  return (
    <div
      className="text-center bg-primary display-3"
      style={{ color: "#ffffff" }}
    >
      {title}
    </div>
  );
};

export default Header;
