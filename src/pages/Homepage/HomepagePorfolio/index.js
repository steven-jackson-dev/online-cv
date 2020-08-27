import React, { useState } from "react";
import { Row, Container, Col, Card } from "react-bootstrap";
import { PopIn } from "react-spring-pop";
import ModalImage from "components/AppModalImage";
import AppNavArrow from "components/AppNavArrow";
import HomepageLink from "../HomepageLink";
import { Link } from "react-router-dom";
import { homepagePortfolioData } from "api/portfolioData";

const HomepagePortfolio = () => {
  const [modalShow, setModalShow] = useState(false);
  const [modalContent, setModalContent] = useState(false);

  const handleImageClick = (e, data) => {
    setModalContent(data);
    setModalShow(true);
  };

  return (
    <section id="HomepagePortfolio">
      <PopIn>
        <Container>
          <Row>
            <Col md={12} xs={12} lg={12}>
              <div className="title text-center mb-5">
                <h2 className="text-uppercase">Portfolio</h2>
              </div>
            </Col>
          </Row>
          <Row className="portfolio-wrapper" noGutters>
            {homepagePortfolioData.map((e) => {
              return (
                <Col key={e.id} md={4} xs={12} lg={3}>
                  <Card className="text-center mx-4">
                    <Card.Img
                      variant="top"
                      src={e.thumb}
                      alt={e.name}
                      onClick={(evt) => handleImageClick(evt, e)}
                    />
                    <Card.Body>
                      <Card.Title>{e.name}</Card.Title>
                      <Card.Text>
                        <em>{e.type}</em>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  {/* <div className="item text-center">
                    <Figure>
                      <Figure.Image
                        alt={e.name}
                        src={e.thumb}
                        onClick={(evt) => handleImageClick(evt, e)}
                      />
                      <Figure.Caption>
                        <h3>{e.name}</h3>
                        <em>{e.type}</em>
                      </Figure.Caption>
                    </Figure>
                  </div> */}
                </Col>
              );
            })}
            <ModalImage
              show={modalShow}
              content={modalContent}
              onHide={() => setModalShow(false)}
            />
          </Row>
          <HomepageLink
            link="/portfolio"
            name="View Portfolio"
            colors={{ bgColor: "#fff", color: "#313131" }}
          />
        </Container>
      </PopIn>
      <AppNavArrow link="#HomepageProjects" color="#000" />
    </section>
  );
};

export default HomepagePortfolio;
