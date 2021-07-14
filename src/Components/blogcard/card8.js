import React from "react";
import { Card } from "react-bootstrap";
import "./card1.css";

function Card8() {
    return (
    <BlogCard8 
    blogThumbnail= "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-14@2x.png"
    address="5 June 2021"
    text251= "Lorem Ipsum passages of Lorem Ipsum available"
    text252= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…"
   // frame1587Props = frame15872Data
    text253= "Read More"
    src= "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg"
/>
    );
}
export default Card8;

function BlogCard8(props) {
  const { blogThumbnail, address, text251, text252, text253, className } = props;

  return (
    <div className={`blog-card-1 ${className || ""}`}>
       <Card >
    <Card.Img variant="top" src={blogThumbnail} className="blog-thumbnail" style={{ backgroundImage: `url(${blogThumbnail})` }}/>
    <Card.Body>
    <Card.Text>
    <div className="address valign-text-middle overpass-semi-bold-scarpa-flow-16px">{address}</div>
      </Card.Text>
      <Card.Title>
        <div className="text valign-text-middle overpass-bold-shark-24px">{text251}</div>
      </Card.Title>
      <Card.Text>
      <p className="text-1 overpass-semi-bold-scarpa-flow-16px">{text252}</p>
      </Card.Text>
   
      <Card.Link href="#"> 
       <div className="text-2 valign-text-middle typographybodycaption-14-semi-bold">{text253}</div>
       </Card.Link>
       </Card.Body>
  </Card> 


      {/*<div className="blog-thumbnail" style={{ backgroundImage: `url(${blogThumbnail})` }}></div>
      <div className="address valign-text-middle overpass-semi-bold-scarpa-flow-16px">{address}</div>
      <div className="text valign-text-middle overpass-bold-shark-24px">{text251}</div>
      <p className="text-1 overpass-semi-bold-scarpa-flow-16px">{text252}</p>
      {/*<Frame1587 text253={frame1587Props.text253} plusProps={frame1587Props.plusProps} />*/}
    </div>
  );
}

