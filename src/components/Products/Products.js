import React from "react";
import "./Products.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
const Products = (props) => {
  const {strCategoryThumb,strCategoryDescription,strCategory}=props.product;
  return (
    <div className="col-lg-6">
      <Card className="bg-dark text-white">
        <Card.Img src={strCategoryThumb} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{strCategory}</Card.Title>
          <Card.Text> 
            {strCategoryDescription.slice(0,200)}
          </Card.Text>
        </Card.ImgOverlay>
        <Button variant="secondary">Add To Cart</Button>
      </Card>
    </div>
  );
};

export default Products;
