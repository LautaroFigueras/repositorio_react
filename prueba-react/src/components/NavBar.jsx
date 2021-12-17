import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'





function NavBar() {
    return(
        <>
             <Navbar bg="dark" variant="dark">
                        <Container>
                        <Navbar.Brand href="#home">Magic</Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Remeras</Nav.Link>
                        <Nav.Link href="#pricing">Cuadros</Nav.Link>
                        </Nav>
                        </Container>
            </Navbar>
            <CartWidget />    
        </>

    )


}
export default NavBar
