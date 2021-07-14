import React from "react";
import { Card } from "react-bootstrap";
import "./card1.css";

function Card6() {
    return (
    <BlogCard6 
    blogThumbnail= "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-83-16@2x.png"
    address="5 June 2021"
    text254= "Lorem Ipsum passages of Lorem Ipsum available"
    text255= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis sapien ac massa dapibus lacinia. Nunc et cursus quam. Cras pharetra condimentum leo,…"
   // frame1587Props = frame15872Data
    text253= "Read More"
    src= "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-174@2x.svg"
/>
    );
}

export default Card6;

function BlogCard6(props) {
  const { blogThumbnail, address, text254, text255, text253, className } = props;

  return (
    <div className={`blog-card-3 ${className || ""}`}>
     <Card >
    <Card.Img variant="top" src={blogThumbnail} className="blog-thumbnail" style={{ backgroundImage: `url(${blogThumbnail})` }}/>
    <Card.Body>
    <Card.Text>
    <div className="address valign-text-middle overpass-semi-bold-scarpa-flow-16px">{address}</div>
      </Card.Text>
      <Card.Title>
        <div className="text valign-text-middle overpass-bold-shark-24px">{text254}</div>
      </Card.Title>
      <Card.Text>
      <p className="text-1 overpass-semi-bold-scarpa-flow-16px">{text255}</p>
      </Card.Text>
       <Card.Link href="#"> 
       <div className="text-2 valign-text-middle typographybodycaption-14-semi-bold">{text253}</div>
       </Card.Link>
       </Card.Body>
  </Card> 



    {/*  <img className="blog-thumbnail-1" src={blogThumbnail} />
      <div className="address-1 valign-text-middle overpass-semi-bold-scarpa-flow-16px">{address}</div>
      <div className="text-3 valign-text-middle overpass-bold-shark-24px">{text254}</div>
      <p className="text-4 overpass-semi-bold-scarpa-flow-16px">{text255}</p>
      {/*<Frame1587 text253={frame1587Props.text253} plusProps={frame1587Props.plusProps} />
      <div className="text-2 valign-text-middle typographybodycaption-14-semi-bold">{text253}</div>*/}
    </div>
  );
}
