import React, { Component } from "react";
import Pulse from "react-reveal/Pulse";
import WorkFooter from "../components/WorkFooter";
import gymImage from "../images/gym.jpeg"
import twitterImage from "../images/twitter1.png"
import todoImage from "../images/todo.jpg"
import planImage from "../images/plan.png"
import "../css/Work.css";
import {
  Card,
  Jumbotron,
  CardTitle,
  CardText,
  CardImg,
  CardImgOverlay,
  Container,
  Row,
  Col
} from "reactstrap";

const imgStyle = {
  height: "348px",
  padding: "10px"
};
const cardText = {
  color: "white",
  textAlign: "center"
};
const backgroundStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.7)"
};
class ServerWork extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <workSection>
          <Jumbotron fluid style={{ background: "none" }}>
            <Container fluid>
              <h1 className="display-3">A taste of my Server Side Work.</h1>
              <p className="lead" style={{ textAlign: "center" }}>
                Click or tap a project to see more.
              </p>
            </Container>
          </Jumbotron>
        </workSection>

        <Container>
          <Row>
 
        
               <Col xs="12" sm="6" lg="4">
              <a
                href="https://planner-d58a1.firebaseapp.com/"
                target="_blank>">
        <Pulse>
              
                <Card style={{ border: "none" }}>
                  <CardImg
                    body
                    inverse
                    style={imgStyle}
                    width="100%"
                    src={planImage}
                    alt="Card image cap"
                  />
                  <CardImgOverlay>
                    <div style={backgroundStyle}>
                      <CardTitle style={cardText}>Group Planner</CardTitle>
                      <CardText style={cardText}>
                        Full stack web app using React.js Redux on the client side and Firebase DB, Firebase Auth, Cloud Functions on server side.
                      </CardText>
                    </div>
                  </CardImgOverlay>
                </Card></Pulse>
              </a>
            </Col>
        
        
        
       
        
        
        
            <Col xs="12" sm="6" lg="4">
              <a
                href="https://newappnamegymconfessions.herokuapp.com/"
                target="_blank>">
        <Pulse>
              
                <Card style={{ border: "none" }}>
                  <CardImg
                    body
                    inverse
                    style={imgStyle}
                    width="100%"
                    src={gymImage}
                    alt="Card image cap"
                  />
                  <CardImgOverlay>
                    <div style={backgroundStyle}>
                      <CardTitle style={cardText}>Gym Confessions</CardTitle>
                      <CardText style={cardText}>
                        Full stack web app with Authentication and authorization.
                      </CardText>{" "}
                    </div>
                  </CardImgOverlay>
                </Card></Pulse>
              </a>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <a
                href="https://github.com/alzz0/Vogelkop-twitter-clone"
                target="_blank>"
              ><Pulse>
                <Card style={{ border: "none" }}>
                  <CardImg
                    style={imgStyle}
                    width="100%"
                    src={twitterImage}
                    alt="Card image cap"
                  />
                  <CardImgOverlay>
                    <div style={backgroundStyle}>
                      <CardTitle style={cardText}>
                        VogelKop (Twitter Clone)
                      </CardTitle>
                      <CardText style={cardText}>
                        Full stack Web app connected to Redux with Authentication
                          and authorization.
                      </CardText>
                    </div>
                  </CardImgOverlay>
                </Card></Pulse>
              </a>
            </Col>

            <Col xs="12" sm="6" lg="4">
              <a href="https://github.com/alzz0/mern-api-todo" target="_blank>">
                  <Pulse>
                <Card style={{ border: "none" }}>
                  <CardImg
                    style={imgStyle}
                    width="100%"
                    src={todoImage}
                  />
                  <CardImgOverlay>
                    <div style={backgroundStyle}>
                      <CardTitle style={cardText}>React Todo App</CardTitle>
                      <CardText style={cardText}>
                        Todo list connected to express and a database.
                      </CardText>
                    </div>
                  </CardImgOverlay>
                </Card></Pulse>
              </a>
            </Col>
          </Row>
          <WorkFooter />
        </Container>
      </div>
    );
  }
}

export default ServerWork;
