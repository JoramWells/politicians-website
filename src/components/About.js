import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import obed from "./img/obed.jpg";
import "./css/index.css";

export default function About() {
  return (
    <div style={{ height: "450px" }} className="main">
        <div style={{ backgroundColor: "#ff4d4d"}}>
        <Container style={{ zindex: "-1", position: "relative" }}>
        <Row>
          <Col></Col>

          <Col className="mt-5 text-center" style={{ color: "white" }}>
            <h2>PRESIDENT 2042</h2>
            <Col>
              <hr style={{ borderTop: "3px solid  white" }} />
            </Col>
            <h1>SENETOR 2022</h1>

            <Col>
              <hr style={{ borderTop: "3px solid  white" }} />
            </Col>
            <h2>MCA</h2>
          </Col>

          <Col className="mt-4">
            {/* <img
              src={obed}
              alt="obedpicture"
              className="rounded-circle"
              style={{ width: "250px" }}
            /> */}
          </Col>
        </Row>
        <Col
          style={{
            backgroundColor: "white",
            height: "400px",
            marginTop: "60px",
          }}
          className="card1"
        >
          <Container>
            <Row>
              <Col></Col>
              <Col>
                <div style={{ margin: "auto", display: "block" }}>
                  <img
                    src={obed}
                    alt="obedpicture"
                    className="rounded-circle mt-4"
                    style={{ width: "200px" }}
                  />
                </div>
              </Col>
              <Col></Col>
            </Row>

            <Col>
            <h1 className="mt-4 text-center">Hon. Obed Mahanga Mwale</h1>
              <p>
                Currnetly MCA in Matisi job, a young person who does his job
                adequately. A daughter and a family man who is willing to do the
                job and a great person who looks forward to a lot.
              </p>
            </Col>
          </Container>
        </Col>
      </Container>
        </div>

      <div
        className="jumbotron"
        style={{
          height: "700px",
          marginTop: "px",
          position: "relative",
          zIndex: "1",
        }}
      ></div>
    </div>
  );
}
