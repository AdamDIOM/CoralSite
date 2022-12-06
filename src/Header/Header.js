import './Header.css';
import {Navbar, Container} from 'react-bootstrap'


export default function Header() {
  return (
    <div className="Header">
        
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="/img/logo.jpg"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
  }