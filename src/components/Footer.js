import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Zoom from "react-reveal/Zoom";
import "../css/Footer.css";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import github from "../images/github.png";

class Footer extends Component {
  render() {
    return (
      <div className="footerStyle">
        <Zoom>
          <Container style={{ margin: "10px auto" }}>
            <Row>
              <Col>Copyright &copy; Ali Mansour 2018</Col>
              <Col>
                <a
                  href="https://www.linkedin.com/in/ali-mansour-99402a126/"
                  target="_blank> "rel="noopener"
                >
                  <img
                    style={{ width: "30px" }}
                    src={linkedin}
                    alt={"LinkedIn"}
                  />
                </a>
              </Col>
              <Col>
                <a href="https://github.com/alzz0" target="_blank>" rel="noopener">
                  <img style={{ width: "30px" }} src={github} alt={"GitHub"} />
                </a>
              </Col>
              <Col>
                <a
                  href="https://twitter.com/AliMansour0?lang=en0"
                  target="_blank>" rel="noopener"
                >
                  <img
                    style={{ width: "30px" }}
                    src={twitter}
                    alt={"Twitter"}
                  />
                </a>
              </Col>
            </Row>
          </Container>
        </Zoom>
      </div>
    );
  }
}

export default Footer;
