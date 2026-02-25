import { Outlet, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import handoutsData from '../data/handouts.json';

export default function Layout() {
  const handouts = handoutsData.handouts || [];

  return (
    <>
      <Navbar bg="white" expand="md" className="site-navbar border-bottom border-dark border-2">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-uppercase ls-tight">
            Dermatology Handouts
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto">
              {handouts.map((h) => (
                <Nav.Link key={h.id} as={Link} to={`/${h.id}`} className="fw-semibold">
                  {h.title}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
}
