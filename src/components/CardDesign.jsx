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

  const data = [
    {
      source: { id: "usa-today", name: "USA Today" },
      author: "Thao Nguyen, Christopher Cann, Trevor Hughes",
      title:
        "Helene tearing through Georgia; 6 dead; 4.4 million without power: Live updates - USA TODAY",
      description:
        "Helene weakened to a tropical storm Friday as it barreled across Georgia, pummeling the Southeast with flooding rain, strong winds and storm surge.",
      url: "https://www.usatoday.com/story/news/nation/2024/09/27/hurricane-helene-tropical-storm-friday-live-updates/75405032007/",
      urlToImage:
        "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/09/27/USAT/75408496007-usatsi-24334596.jpg?crop=2497,1403,x2,y259&width=2497&height=1403&format=pjpg&auto=webp",
      publishedAt: "2024-09-27T14:15:00Z",
      content:
        "ST. MARKS, Fla. Helene, now weakened to a tropical storm as it barreled through Georgia on Friday, still wielded enough force to unleash life-threatening floods across the Southeast and cause million… [+17483 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author:
        "Adam Taylor, Rachel Chason, Karen DeYoung, Louisa Loveluck, Sammy Westfall, Ishaan Tharoor, Alon Rom, Miriam Berger, Mohamad El Chamaa, Andrew Jeong, Dan Lamothe, Mariana Alfaro",
      title:
        "Live updates: Netanyahu addresses U.N. as nations call for Israel-Hezbollah cease-fire - The Washington Post",
      description:
        "The Israeli prime minister is in New York for the address as Biden administration officials await Israeli and Lebanese action on a cease-fire proposal.",
      url: "https://www.washingtonpost.com/world/2024/09/27/netanyahu-un-speech-israel-lebanon-hezbollah-hamas/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/RJOTB3DAAQVYOW3URRKR5RQZNE_size-normalized.JPG&w=1440",
      publishedAt: "2024-09-27T14:05:54Z",
      content:
        "Israel-Gaza war\r\nThe Israel-Gaza war has gone on for months, and tensions have spilled into the surrounding Middle East region.\r\nThe war: On Oct. 7, Hamas militants launched an unprecedented cross-bo… [+1199 chars]",
    },
  ];

  return (
    <Container style={containerDesign}>
      <Card>
        <Card.Img style={imageStyle} variant="top" src={data[0].urlToImage} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            <h2>{data[0].title}</h2>
          </Card.Title>
          <br />
          <Card.Text style={{ textAlign: "center" }}>
            <p style={pdesign}>{data[0].description}</p>
          </Card.Text>
        </Card.Body>
        <a href={data[0].url} target="_blank" rel="noopener noreferrer">
          <p style={{ textAlign: "center" }}> Read Full Article</p>
        </a>
      </Card>
    </Container>
  );
};

export default CardDesign;
