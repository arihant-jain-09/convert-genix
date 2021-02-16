import {Nav,Navbar } from 'react-bootstrap';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from 'react-router-dom';
import {auth} from '../firebase/firebase.utils.js'
import CG from '../CG.ico'
import '../App.css'
function Navbarreact({currentUser}){
  return <Navbar bg="light" variant="light" >
    <Navbar.Brand className='brand'><Link to='/convert-genix'><img src={CG} alt='logo'/>Convert Genix</Link></Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Nav>
  <Nav.Link href="#login">Login</Nav.Link>
  {
    currentUser ? <div><Nav.Link onClick={()=>{auth.signOut()}}>SIGN OUT</Nav.Link></div>
    :
    <Nav.Link>
      <Link to='/convert-genix/signin'>
      <ExitToAppIcon /> SignUp
    </Link>
    </Nav.Link>
  }
  {/* <Nav.Link href="#signup">
    <Link to='signin'>
    <ExitToAppIcon /> SignUp
  </Link>
  </Nav.Link> */}
</Nav>
  </Navbar>
}
export default Navbarreact;
