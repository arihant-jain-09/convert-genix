import {Nav,Navbar } from 'react-bootstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CG from '../CG.ico'
import '../App.css'
function Navbarreact(){
  return <Navbar bg="light" variant="light" >
    <Navbar.Brand href="#home" className='brand'><img src={CG} alt='logo'/>Convert Genix</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
  <Nav.Link href="#login">Login</Nav.Link>
  <Nav.Link href="#signup"><ExitToAppIcon /> SignUp</Nav.Link>
</Nav>
  </Navbar>
}
export default Navbarreact;
