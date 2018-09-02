import React, { Component } from "react";

const footerStyle = {
  textAlign: "center",
  margin: "10vh auto",
  maxWidth: "380px"
};
class WorkFooter extends React.Component {
  render() {
    return (
      <div style={footerStyle}>
        <h4>Let's chat</h4>
        <p>
          Wanna get in touch or talk about a project? Feel free to contact me
          via email at alimansour97@gmail.com or through my social media links
          listed below.
        </p>
      </div>
    );
  }
}

export default WorkFooter;