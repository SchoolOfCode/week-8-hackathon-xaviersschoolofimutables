"use client";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar
        expand="lg"
        className="h-28 p-4 bg-slate-700 text-white shadow-md"
      >
        <Container>
          {/* Tasty Ten Branding */}
          <Navbar.Brand
            href="#home"
            className="text-2xl font-bold text-white uppercase tracking-widest border-b-2 hover:border-yellow-400 transition-all duration-300"
          >
            Tasty Ten
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-none outline-none focus:ring focus:ring-yellow-400 p-2 rounded-md"
          />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto space-x-6 text-lg font-medium">
              <Nav.Link
                href="#home"
                className="text-white hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#link"
                className="text-white hover:text-yellow-400 transition-colors duration-300"
              >
                Favourites
              </Nav.Link>
              <NavDropdown
                title="More"
                id="basic-nav-dropdown"
                className="text-white"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  className="text-black hover:bg-yellow-400 hover:text-white transition-colors duration-300"
                >
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.2"
                  className="text-black hover:bg-yellow-400 hover:text-white transition-colors duration-300"
                >
                  Another Action
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="#action/3.3"
                  className="text-black hover:bg-yellow-400 hover:text-white transition-colors duration-300"
                >
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action/3.4"
                  className="text-black hover:bg-yellow-400 hover:text-white transition-colors duration-300"
                >
                  Separated Link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="flex flex-col items-center text-center pt-5">
        <h2 className="text-2xl font-extrabold text-yellow-950 uppercase tracking-widest leading-relaxed border-b-2 hover:border-yellow-400 transition-all duration-300 py-2">
          Your Next Meal Starts Here.
        </h2>
        <h2 className="text-2xl font-bold text-yellow-950 uppercase tracking-widest leading-relaxed border-b-2 hover:border-yellow-400 transition-all duration-300">
          Choose Your Ingredient, 10 Recipes, One Click. 🥄
        </h2>
      </div>
    </div>
  );
}

export default Header;
