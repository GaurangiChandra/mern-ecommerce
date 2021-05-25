import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image,ListGroup,Card,Button} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({match}) => {
    // when we need to match a particular route from the url(query) the we use params
    // /hosts is a param in this url http://localhost:3000/home
    // : is used in the route which is matched
    // in this case, id is passed after :
    const product = products.find(p=>p._id === match.params.id)

  return <> 
<Link className = 'btn btn-dark my-3' to='/'> 
 Go Back
</Link>
<Row>
    <Col md={6}>
        <Image src={product.image} alt={product.name} fluid></Image>
    </Col>
    <Col md={3}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h2>{product.name}</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                </ListGroup.Item>
                <ListGroup.Item>
                    Price: ₹{Number(product.price).toLocaleString()}
                </ListGroup.Item>
                <ListGroup.Item>
                    Description:{product.description}
                </ListGroup.Item>
            </ListGroup>
    </Col>
    <Col md={3}>
        <Card>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <Row>
                        <Col>
                          Price:
                        </Col>
                        <Col>
                                <strong>
                                ₹{Number(product.price).toLocaleString()}
                                </strong>
                        </Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                        <Col>
                          Status:
                        </Col>
                        <Col>
                               {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Button className = 'btn-block' type ='button' disabled={product.countInStock === 0}>
                        Add To Cart
                    </Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    </Col>
</Row>
  </>;
};

export default ProductScreen;
