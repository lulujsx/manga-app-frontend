import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { useUser } from '../context/userProvider'

/***
 *  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
 */

export default function NavBar() {
    const {user, setUser} = useUser()
    console.log("info de user",user)
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Manga App</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                { user && user.user && user.user.role === "ADMIN" && (    
                        <Nav.Link href="/addBook">Agregar Manga</Nav.Link>   
                    )
                }
                </Nav>     
                <Nav>
                    { user && user.user ? (
                        <>
                        <h5 style={{color: 'white', marginRight: 20}}>
                            {user.user.name}
                        </h5 >
                        <Button onClick={()=>setUser(null)} variant="light" size="sm" className="btn btn-outline-dark">Cerrar sesión</Button>
                        </>
                    ) : (
                        <>
                        <Nav.Link href="/login">Iniciar sesión</Nav.Link>
                        <Nav.Link href="/register">Registrarse</Nav.Link>
                        </>
                    )
                    }
                
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}