import { Jumbotron,Container,Row,Col } from 'react-bootstrap';
import UploadButtons from './uploadbuttons.jsx'
import {app} from '../firebase/firebase.utils.js'
import SVG from './svg'
import EFFECTS from './effects.jsx'
import CARD from './card.jsx'
function Jumbotronreact(){
  const onChange = (e) => {
     const file = e.target.files[0];
     const storageRef = app.storage().ref()
     const fileRef = storageRef.child(file.name)
     fileRef.put(file).then(() => {
       console.log("Uploaded a file")
     })
   }
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
          {/* <Button className='upload-button' variant="outline-dark"><BackupIcon/> Upload</Button> */}
          <div className="upload-button">
            <UploadButtons type="file" onChange={onChange}/>
        </div>
        </Col>
        </Row>
      </Container>
      </div>
    </Jumbotron>
  </div>
}
export default Jumbotronreact;
