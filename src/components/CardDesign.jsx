import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardDesign = () => {
  const containerDesign = {
    width: "50vw",
    backgroundColor: "#A6ECE0",
    height: "60vh",
    borderRadius: "5px",
    marginTop: "3vh",
    marginLeft: "auto",
    marginRight: "auto",
    border: "2px solid red",
    alignItems: "center",
  };

  const pdesign = {
    fontSize: "20px",
  };
  const imageStyle = {
    height: "20%",
    objectFit: "cover",
    width: "40%",
    marginLeft: "15vw",
  };

  return (
    <Container style={containerDesign}>
      <Card>
        <Card.Img style={imageStyle} variant="top" src={data.urlToImage} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            <h2>{data.title}</h2>
          </Card.Title>
          <br />
          <Card.Text style={{ textAlign: "center" }}>
            <p style={pdesign}>{data.description}</p>
          </Card.Text>
        </Card.Body>
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          <p style={{ textAlign: "center" }}> Read Full Article</p>
        </a>
      </Card>
    </Container>
  );
};

export default CardDesign;
