import React, { Component } from "react";
import Pulse from "react-reveal/Pulse";
import WorkFooter from "../components/WorkFooter";
import colorImage from "../images/color.png";
import gymImage from "../images/gym.jpeg";
import twitterImage from "../images/twitter1.png";
import weatherImage from "../images/weather.jpg";
import todoImage from "../images/todo.jpg";
import lyricImage from "../images/lyric.jpg";
import planImage from "../images/plan.png";
import eComImage from "../images/ecom.jpg";
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
class ClientWork extends Component {
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
              <a href="https://planner-d58a1.firebaseapp.com/" target="_blank>">
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
                          Full stack web app using React.js, Redux on the client
                          side and Firebase DB, Firebase Auth, Cloud Functions
                          on server side.
                        </CardText>
                      </div>
                    </CardImgOverlay>
                  </Card>
                </Pulse>
              </a>
            </Col>

            <Col xs="12" sm="6" lg="4">
              <a
                href="https://athletes-clothing.herokuapp.com/"
                target="_blank>"
              >
                <Pulse>
                  <Card style={{ border: "none" }}>
                    <CardImg
                      style={imgStyle}
                      width="100%"
                      src={eComImage}
                      alt="Card image cap"
                    />
                    <CardImgOverlay>
                      <div style={backgroundStyle}>
                        <CardTitle style={cardText}>
                          Athletes Clothing Ecommerce
                        </CardTitle>
                        <CardText style={cardText}>
                          Shop for you favorite clothing powered by Javascript,
                          React.js, Redux, and Firebase. Seemlessly sign up and
                          Login with Google and securly and safely pay with
                          Stripe.
                        </CardText>
                      </div>
                    </CardImgOverlay>
                  </Card>
                </Pulse>
              </a>
            </Col>

            <Col xs="12" sm="6" lg="4">
              <a href="https://lyricsearch.herokuapp.com/" target="_blank>">
                <Pulse>
                  <Card style={{ border: "none" }}>
                    <CardImg
                      style={imgStyle}
                      width="100%"
                      src={lyricImage}
                      alt="Card image cap"
                    />
                    <CardImgOverlay>
                      <div style={backgroundStyle}>
                        <CardTitle style={cardText}>Lyric Search</CardTitle>
                        <CardText style={cardText}>
                          Search for your favorite song and get the lyrics,
                          release date and more!
                        </CardText>
                      </div>
                    </CardImgOverlay>
                  </Card>
                </Pulse>
              </a>
            </Col>

            <Col xs="12" sm="6" lg="4">
              <a
                href="https://newappnamegymconfessions.herokuapp.com/posts"
                target="_blank>"
              >
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
                          Full stack web app with Authentication and
                          authorization.
                        </CardText>
                      </div>
                    </CardImgOverlay>
                  </Card>
                </Pulse>
              </a>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <a
                href="https://github.com/alzz0/Vogelkop-twitter-clone"
                target="_blank>"
              >
                <Pulse>
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
                          Full stack Web app connected to Redux with
                          Authentication and authorization.
                        </CardText>
                      </div>
                    </CardImgOverlay>
                  </Card>
                </Pulse>
              </a>
            </Col>

            <Col xs="12" sm="6" lg="4">
              <a
                href="https://github.com/alzz0/weather-application"
                target="_blank>"
              >
                <Pulse>
                  <Card style={{ border: "none" }}>
                    <CardImg style={imgStyle} width="100%" src={weatherImage} />
                    <CardImgOverlay>
                      <div style={backgroundStyle}>
                        <CardTitle style={cardText}>React Weaher App</CardTitle>
                        <CardText style={cardText}>
                          Weather App connected to an Api bringing you your
                          currenct weather information.
                        </CardText>
                      </div>
                    </CardImgOverlay>
                  </Card>
                </Pulse>
              </a>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <a href="https://github.com/alzz0/mern-api-todo" target="_blank>">
                <Pulse>
                  <Card style={{ border: "none" }}>
                    <CardImg style={imgStyle} width="100%" src={todoImage} />
                    <CardImgOverlay>
                      <div style={backgroundStyle}>
                        <CardTitle style={cardText}>React Todo App</CardTitle>
                        <CardText style={cardText}>
                          Todo list connected to express and a database.
                        </CardText>
                      </div>
                    </CardImgOverlay>
                  </Card>
                </Pulse>
              </a>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <a href="https://github.com/alzz0/Recipe-react" target="_blank>">
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
                          One input, dozens of recipes. Recipe app fetching your
                          recipe input from an api.
                        </CardText>
                      </div>
                    </CardImgOverlay>
                  </Card>
                </Pulse>
              </a>
            </Col>
            <Col xs="12" sm="6" lg="4">
              <a href="https://codepen.io/Alzz0/pen/ENEXrq" target="_blank>">
                <Pulse>
                  <Card style={{ border: "none" }}>
                    <CardImg style={imgStyle} width="100%" src={colorImage} />
                    <CardImgOverlay>
                      <div style={backgroundStyle}>
                        <CardTitle style={cardText}>RGB Color Game</CardTitle>
                        <CardText style={cardText}>
                          Easy or hard mode, click new colors and try to guess
                          the right answer.
                        </CardText>
                      </div>
                    </CardImgOverlay>
                  </Card>
                </Pulse>
              </a>
            </Col>
          </Row>
          <WorkFooter />
        </Container>
      </div>
    );
  }
}

export default ClientWork;
