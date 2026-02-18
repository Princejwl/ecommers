import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Navbar, Footer } from '../components';

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
    <>
      <Navbar /> 
      <Container className="mt-4">
        <h2 className="mb-4 text-center">My Wishlist</h2>
        <Row>
          {wishlistItems.length === 0 && <p className="text-center">Your wishlist is empty.</p>}
          {wishlistItems.map(item => (
            <Col md={4} key={item.id} className="mb-4">
              <Card style={{ backgroundColor: 'var(--surface-color)', border: 'var(--glass-border)' }}>
                <div className="bg-white rounded-top p-3 d-flex justify-content-center">
                    <Card.Img variant="top" src={item.image} alt={item.name} style={{ width: '150px', height: '150px', objectFit: 'contain' }} />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text style={{ color: 'var(--primary-color)', fontSize: '1.2rem', fontWeight: 'bold' }}>{item.price}</Card.Text>
                  <Button variant="outline-danger" className="me-2">Remove</Button>
                  <Button variant="dark">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Wishlist;
