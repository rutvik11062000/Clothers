import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
import "./directory.styles.scss";
import MenuItem from "../menu-item/MenuItem";
import { connect } from "react-redux";
import { selectDirtectorySelector } from "../../redux/directory/directory.selector";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem id={id} {...otherSectionProps}></MenuItem>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirtectorySelector,
});

export default connect(mapStateToProps)(Directory);
