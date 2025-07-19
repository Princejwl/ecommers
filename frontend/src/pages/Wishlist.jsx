import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Wishlist = () => {
  // Sample wishlist items - replace with real data or redux state
  const wishlistItems = [
    {
      id: 1,
      name: 'Product 1',
      price: '$25',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      price: '$40',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <Container className="mt-4">
      <h2 className="mb-4">My Wishlist</h2>
      <Row>
        {wishlistItems.length === 0 && <p>Your wishlist is empty.</p>}
        {wishlistItems.map(item => (
          <Col md={4} key={item.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>Price: {item.price}</Card.Text>
                <Button variant="danger" className="me-2">Remove</Button>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Wishlist;
