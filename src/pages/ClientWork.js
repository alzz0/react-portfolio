import React, { Component } from "react";
import Pulse from "react-reveal/Pulse";
import WorkFooter from "../components/WorkFooter"
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
class ClientWork extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        <workSection>
          <Jumbotron fluid style={{ background: "none" }}>
            <Container fluid>
              <h1 className="display-3">A taste of my Client Side Work.</h1>
              <p className="lead" style={{ textAlign: "center" }}>
                Click or tap a project to see more.
              </p>
            </Container>
          </Jumbotron>
        </workSection>

        <Container>
          <Row>
            <Col xs="12" sm="6" lg="4">
              <a href="http://google.ca" target="_blank>">
                <Pulse>
                  <Card style={{ border: "none" }}>
                    <CardImg
                      body
                      inverse
                      style={imgStyle}
                      width="100%"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSei4Rz8MO3GboDBHIMoklz7-SFUjLklMnTGk8zjkWImiNO9w8bMQ"
                      alt="Card image cap"
                    />
                    <CardImgOverlay>
                      <div style={backgroundStyle}>
                        <CardTitle style={cardText}>Gym Confessions</CardTitle>
                        <CardText style={cardText}>
                          Full stack web app. Authentication and authorization
                        </CardText>
                      </div>
                    </CardImgOverlay>
                  </Card>
                </Pulse>
              </a>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <a href="http://google.ca" target="_blank>">
                <Pulse>
                  <Card style={{ border: "none" }}>
                    <CardImg
                      style={imgStyle}
                      width="100%"
                      src="http://www.alter-net.info/twitter_newbird_boxed_whiteonblue.png/image"
                      alt="Card image cap"
                    />
                    <CardImgOverlay>
                      <div style={backgroundStyle}>
                        <CardTitle style={cardText}>
                          VogelKop (Twitter Clone)
                        </CardTitle>
                        <CardText style={cardText}>
                          Full stack Web app connected to Redux. Authentication
                          and authorization.
                        </CardText>
                      </div>
                    </CardImgOverlay>
                  </Card>
                </Pulse>
              </a>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <a href="http://google.ca" target="_blank>">
                  <Pulse>
                <Card style={{ border: "none" }}>
                  <CardImg
                    style={imgStyle}
                    width="100%"
                    src="https://www.sketchappsources.com/resources/source-image/weather-app-icons.jpg"
                  />
                  <CardImgOverlay>
                    <div style={backgroundStyle}>
                      <CardTitle style={cardText}>React Weaher App</CardTitle>
                      <CardText style={cardText}>
                        Weather App connected to an Api brining you your
                        currenct weather information
                      </CardText>
                    </div>
                  </CardImgOverlay>
                </Card>
</Pulse>
              </a>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <a href="http://google.ca" target="_blank>">
                  <Pulse>
                <Card style={{ border: "none" }}>
                  <CardImg
                    style={imgStyle}
                    width="100%"
                    src="https://banner2.kisspng.com/20180809/uyq/kisspng-calendar-date-iconfinder-scalable-vector-graphics-calendar-date-event-month-todo-check-svg-png-icon-5b6c65a1f07792.060592131533830561985.jpg"
                  />
                  <CardImgOverlay>
                    <div style={backgroundStyle}>
                      <CardTitle style={cardText}>React Weaher App</CardTitle>
                      <CardText style={cardText}>
                        Todo list connected to express and a database
                      </CardText>
                    </div>
                  </CardImgOverlay>
                </Card></Pulse>
              </a>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <a href="http://google.ca" target="_blank>">
                  <Pulse>
                <Card style={{ border: "none" }}>
                  <CardImg
                    style={imgStyle}
                    width="100%"
                    src="https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3Fitok%3Dbt5Cny7R&w=700&q=85"
                  />
                  <CardImgOverlay>
                    <div style={backgroundStyle}>
                      <CardTitle style={cardText}>React Recipe App</CardTitle>
                      <CardText style={cardText}>
                        One input, dozens of recipes.
                      </CardText>
                    </div>
                  </CardImgOverlay>
                </Card>
</Pulse>
              </a>
            </Col>
          </Row>
<WorkFooter/>
        </Container>
      </div>
    );
  }
}

export default ClientWork;
