import React from "react";
import './homepage.style.scss'
import Directory from "../../components/directory/directory.component";

export const Homepage = ({history}) => {
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
};
