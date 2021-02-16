import MusicNoteIcon from '@material-ui/icons/MusicNote';
import DuoIcon from '@material-ui/icons/Duo';
import ImageIcon from '@material-ui/icons/Image';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import {Row,Col} from 'react-bootstrap';
function CARD(){
  return <div><MusicNoteIcon /> <span className='span'>Audio</span>
  <Row className='row-component '>
    <Col>.mp3</Col>
    <Col>.aac</Col>
    <Col>.mp4</Col>
    <Col>.wmv</Col>
  </Row>
  <DuoIcon /> <span className='span'>Video</span>
  <Row className='row-component'>
    <Col>.3gp</Col>
    <Col>.avi</Col>
    <Col>.mov</Col>
    <Col>.mkv</Col>
  </Row>
  <ImageIcon /> <span className='span'>Image</span>
  <Row className='row-component'>
    <Col>.jpg</Col>
    <Col>.png</Col>
    <Col>.gif</Col>
    <Col>.jpeg</Col>
  </Row>
  <InsertDriveFileIcon /> <span className='span'>Image</span>
  <Row className='row-component'>
    <Col>.doc</Col>
    <Col>.xls</Col>
    <Col>.word</Col>
    <Col>.ppt</Col>
  </Row>
  </div>
}
export default CARD;
