import {  Button,Jumbotron,Container,Row,Col } from 'react-bootstrap';
import BackupIcon from '@material-ui/icons/Backup';
import SVG from './svg'
import EFFECTS from './effects.jsx'
import CARD from './card.jsx'
function Jumbotronreact(){
  return <div>
    <Jumbotron fluid >
      <div className='jumbo'>
        <Container>
          <Row>
            <Col md={8}>
          <h2 className='heading-2'>The Simplest Way to Convert  </h2>
          <h1><strong>Word, PDF, Audio & Video Files</strong></h1>
          <p>
            Just Upload a file and Click on Convert!
          </p>
          <SVG />
          <p>
            <div className="effect">
              <EFFECTS />
              </div>
          </p>
        </Col>
        <Col>
          <CARD />
          <Button className='upload-button' variant="outline-dark"><BackupIcon/> Upload</Button>
          <div className="3d">

        </div>
        </Col>
        </Row>
      </Container>
      </div>
    </Jumbotron>
  </div>
}
export default Jumbotronreact;
