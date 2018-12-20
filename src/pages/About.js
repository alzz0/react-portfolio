import React, { Component } from "react";
import { Alert } from "reactstrap";
import Typist from "react-typist";
import { Link } from "react-router-dom";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardText
} from "reactstrap";
import "../css/About.css";

const cardStyle = {
  border: "none",
  textAlign: "left",
  marginTop: "50px",
  marginBottom: "50px"
};

const h1Style = {
  color: "#cccccc",
  textAlign: "left",
  marginTop: "90px"
};

const h1Span = {
  color: "#444"
};

//const spanStyle = {
//  fontSize: "18px"
//};

class About extends Component {
  state = {
    visible: true
  };

  onDismiss = () => {
    this.setState({ visible: false });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <aboutSection>
          <div id="aboutHeader">
            <Jumbotron fluid style={{ backgroundColor: "#2f2f2f" }}>
              <Container fluid>
                <h1 className="display-5">
                  {" "}
                  Hello, my name is <Typist>Ali Mansour</Typist>
                </h1>

                <p className="lead">
                  I am a Full Stack Web Developer and UI/UX Javascript
                  specialist. Born and raised in the capital of Alberta, Canada.
                  Check out my social media accounts or my React.JS UI
                  components at Github. Feel free to take a look at my latest
                  projects on the My Work page. I am very passionate on my work
                  and I capitilize my passion!
                </p>
              </Container>
            </Jumbotron>
          </div>
        </aboutSection>

        <aboutSection3>
          <Container>
            <Alert
              style={{ margin: "0", textAlign: "center" }}
              color="info"
              isOpen={this.state.visible}
              toggle={this.onDismiss}
            >
              <Link
                to={"/client"}
                style={{ textDecoration: "none", color: "#212121" }}
              >
                Cick me to to view a taste of my projects.
              </Link>
            </Alert>
            <Row>
              <Jumbotron fluid style={{ background: "none" }}>
                <Container fluid>
                  <h1
                    style={{
                      fontSize: "100px",
                      fontWeight: "700",
                      color: "#00b7ff"
                    }}
                    className="display-3"
                  >
                    12 +
                  </h1>
                  <p className="lead">
                    <h1 style={{ color: "#00b7ff" }}>PROJECTS COMPLETED</h1>
                    I have completed over 12 projects including client side and
                    server side. Creating full stack web applications, deployed
                    and ready for production.
                  </p>
                </Container>
              </Jumbotron>
            </Row>
          </Container>
        </aboutSection3>
        <aboutSection2>
          <Container>
            <Row>
              <Col xs="12" sm="12" md="4">
                <Card className="card" style={cardStyle}>
                  <CardTitle>
                    <h1 style={h1Style}>
                      01. <span style={h1Span}>Research</span>
                    </h1>
                  </CardTitle>

                  <CardText>
                    Understand the subject matter completely and build on the
                    knowledge related to it, becoming intimately familiar with
                    the matter. Determine methods to address the specific needs
                    and requirements.
                  </CardText>
                  <CardText>
                    <small className="text-muted" />
                  </CardText>
                </Card>
              </Col>
              <Col xs="12" sm="12" md="4">
                <Card style={cardStyle}>
                  <CardTitle>
                    <h1 style={h1Style}>
                      02. <span style={h1Span}>Design</span>
                    </h1>
                  </CardTitle>

                  <CardText>
                    Misleadingly thought of as the superficial appearance of a
                    product, design actually encompasses a lot more. It is a
                    cross functional process that includes market research,
                    technical research, design of a concept, and prototype
                    mockup.
                  </CardText>
                  <CardText>
                    <small className="text-muted" />
                  </CardText>
                </Card>
              </Col>
              <Col sm="12" md="4">
                <Card style={cardStyle}>
                  <CardTitle>
                    <h1 style={h1Style}>
                      03. <span style={h1Span}>Develop</span>
                    </h1>
                  </CardTitle>

                  <CardText>
                    Findings from the research and design phases are utilized
                    for the production of specific products including materials,
                    systems, and methods. Engineer utilizing the research and
                    designs to produce commercial products.
                  </CardText>
                  <CardText>
                    <small className="text-muted" />
                  </CardText>
                </Card>
              </Col>
            </Row>
          </Container>
        </aboutSection2>
      </div>
    );
  }
}

export default About;
