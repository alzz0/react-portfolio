import React, { Component } from "react";
import {
  Jumbotron,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Container,
  Row,
  Col
} from "reactstrap";
import "../css/Contact.css";
import classnames from "classnames";

const contactStyle = {
  marginTop: "20px",
  background: "none",
  color: "white",
  textAlign: "center"
};

const tabStyle = {
  background: "none",
  color: "white",
  cursor: "pointer"
};
const cardStyle = {
  background: "none",
  border: "none"
};
class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  state = {
    activeTab: "1"
  };

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };

  render() {
    return (
      <div>
        <contactSection>
          <Jumbotron style={contactStyle}>
            <h1 className="display-5">LET’S COLLABORTE OR SOCIALIZE</h1>
            <p className="lead">
              If you would like to get in touch, talk to me about a project
              collaboration or just say hi you can...
            </p>
            <hr className="my-2" />
            <p>
              Click or tap one of the tabs below on your preferences of
              communication.
            </p>
            <Nav tabs>
              <NavItem>
                <NavLink
                  style={tabStyle}
                  className={classnames({
                    active: this.state.activeTab === "1"
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Email
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  style={tabStyle}
                  className={classnames({
                    active: this.state.activeTab === "3"
                  })}
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  Phone
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  style={tabStyle}
                  className={classnames({
                    active: this.state.activeTab === "2"
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Social Media
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <h4 style={{ color: "#00b7ff" }}>Alimansour97@gmail.com</h4>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <h4 style={{ color: "#00b7ff" }}>(780)-680-2356</h4>
                  </Col>
                </Row>
              </TabPane>

              <TabPane tabId="2">
                <Row>
                  <Col sm="6">
                    <Card body style={cardStyle}>
                      <CardTitle style={{ color: "#1DA1F2" }}>
                        Twitter
                      </CardTitle>
                      <CardText>
                        Reach out to me on twitter and while waiting for a
                        response feel free to check out what I have been up too
                        on my casual time.
                      </CardText>
                      <a href="https://twitter.com/AliMansour0" target="_blank">
                        {" "}
                        <Button style={{ backgroundColor: "#1DA1F2" }}>
                          Take me there!
                        </Button>
                      </a>
                    </Card>
                  </Col>
                  <Col sm="6">
                    <Card body style={cardStyle}>
                      <CardTitle style={{ color: "#0077B5" }}>
                        LinkedIn
                      </CardTitle>
                      <CardText>
                        On the more formal side you can find me at LinkedIn.
                        Feel free to send me a message and connect.
                      </CardText>
                      <a
                        href="https://www.linkedin.com/in/ali-mansour-99402a126/"
                        target="_blank"
                      >
                        <Button style={{ backgroundColor: "#0077B5" }}>
                          Take me there!
                        </Button>
                      </a>
                    </Card>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>
          </Jumbotron>
        </contactSection>
      </div>
    );
  }
}

export default Contact;
