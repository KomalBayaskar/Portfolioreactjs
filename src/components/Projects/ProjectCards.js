import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title style={{fontWeight:"bold"}}>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontWeight: "bold" }}>
          {props.title1}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description1}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify", fontWeight: "bold" }}>
          {props.title2}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description2}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify", fontWeight: "bold" }}>
          {props.title3}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description3}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

       
         
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
