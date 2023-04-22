import React from 'react'
import {Nav,NavItem,NavLink,Navbar,Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
const Header = () => {
  return (

  <header>
    <Navbar bg="dark"  variant ="dark" expand="lg">
      <Container>
       <LinkContainer to ="/">
           
       <Navbar.Brand >E-commerce</Navbar.Brand>
       
       </LinkContainer>

        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to ="/">
            <Nav.Link href="/">Home</Nav.Link> 
            </LinkContainer> 
          </Nav>
          <Nav className="ml-auto">
          <LinkContainer to ="/cart">
          <Nav.Link > 
          <i class="fa fa-shopping-cart"></i>cart
            </Nav.Link> 
           
          </LinkContainer >
          <LinkContainer to ="/login">
            <Nav.Link ><i class='fas fa-user-alt'></i> sign in</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
</header>

  )
}

export default Header