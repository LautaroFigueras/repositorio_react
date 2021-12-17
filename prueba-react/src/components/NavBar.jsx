import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget'





function NavBar() {
    return(
        <>
             <Navbar bg="light" variant="light">
                        <Container>
                        <Navbar.Brand href="#home">Magic</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Remeras</Nav.Link>
                            <Nav.Link href="#pricing">Cuadros</Nav.Link>
                            <CartWidget />
                        </Nav>
                        </Container>
            </Navbar>
            <CartWidget />    
        </>

    )


}
export default NavBar
