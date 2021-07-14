import React from 'react'
import {Row, Col} from "react-bootstrap";
import BlogCard from './Components/blogcard/card1'
import BlogCard2 from './Components/blogcard/card2'
import BlogCard3 from './Components/blogcard/card3'
import BlogCard4 from './Components/blogcard/card4'
import BlogCard5 from './Components/blogcard/card5'
import BlogCard6 from './Components/blogcard/card6'
import BlogCard7 from './Components/blogcard/card7'
import BlogCard8 from './Components/blogcard/card8'
import BlogCard9 from './Components/blogcard/card9'


function Main(){
    return(
      <>
      
          <Row md={12}>
              <Col md={4}>
              <BlogCard/>
              </Col>
              
              <Col md={4}>
              <BlogCard2/>
              </Col>
              
              <Col md={4}>
              <BlogCard3/>
              </Col>
          </Row>
          <Row md={12}>
              <Col md={4}>
              <BlogCard4/>
              </Col>
              
              <Col md={4}>
              <BlogCard5/>
              </Col>
              
              <Col md={4}>
              <BlogCard6/>
              </Col>
          </Row>
          <Row md={12}>
              <Col md={4}>
              <BlogCard7/>
              </Col>
              
              <Col md={4}>
              <BlogCard8/>
              </Col>
              
              <Col md={4}>
              <BlogCard9/>
              </Col>
          </Row>
         
       </>
    )
}

export default Main;