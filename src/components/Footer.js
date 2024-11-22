import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className=" footer text-align-center mt-2 py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p>© {new Date().getFullYear()} MOVIES. جميع الحقوق محفوظة.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <p>تابعنا على: 
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">Twitter</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
