import React from "react";
import { Container, Card, Button } from "react-bootstrap";

const CardDesign = ({ data, users }) => {
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
    maxHeight: "100vh",
    overflowY: "hidden", // Add this to hide overflow
  };

  const cardDesign = {
    height: "100%", // Make card take full container height
    display: "flex",
    flexDirection: "column", // Arrange content vertically
  };

  const imageStyle = {
    height: "20vh", // Set fixed height for image
    objectFit: "cover",
    width: "40%",
    marginLeft: "15vw",
    marginBottom: "2vh", // Add margin for spacing
  };

  const pdesign = {
    fontSize: "18px", // Reduce font size
    textAlign: "center",
  };

  const titleDesign = {
    fontSize: "20px",
    textAlign: "center",
    marginBottom: "2vh", // Add margin for spacing
  };

  return (
    <Container style={containerDesign}>
      <Card style={cardDesign}>
        <Card.Img style={imageStyle} variant="top" src={data.urlToImage} />
        <Card.Body>
          <Card.Title style={titleDesign}>
            <h2>{data.title}</h2>
          </Card.Title>
          <Card.Text style={pdesign}>
            {/* {data.description.substring(0, 200)}...{" "}  */}
            {/* Trim description to 200 chars */}
            {data.description}
          </Card.Text>
        </Card.Body>
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textAlign: "center", marginBottom: "2vh" }}
        >
          Read Full Article
        </a>
      </Card>
    </Container>
  );
};

export default CardDesign;
