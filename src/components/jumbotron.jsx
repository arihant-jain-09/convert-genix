import React,{useState} from 'react';
import { Jumbotron,Container,Row,Col} from 'react-bootstrap';
import UploadButtons from './uploadbuttons.jsx'
import {app} from '../firebase/firebase.utils.js'
// import { useForm } from "react-hook-form";
import SVG from './svg'
import EFFECTS from './effects.jsx'
import CARD from './card.jsx'
import '../App.css'
function Jumbotronreact(){
  const [upload,setupload]=useState('')
  // const { register, handleSubmit } = useForm()
  // const [uploadPercentage,setuploadPercentage]=useState(0);
  const [isupload,setisupload]=useState(false)
  const onChange = (e) => {
     const file = e.target.files[0];
     const storageRef = app.storage().ref()
     const fileRef = storageRef.child(file.name)
     fileRef.put(file).then(() => {
      fileRef.getDownloadURL().then(function (url) {
                console.log(url);
                setupload(url);
                if(url){
                  setisupload(true)
                }
});
       console.log("Uploaded a file")
     })
   }

//    const onSubmit = (data) => {
//      const storageRef = app.storage().ref()
//      const fileRef = storageRef.child(data.document[0].name)
//      fileRef.put(data.document[0]).then(() => {
//       fileRef.getDownloadURL().then(function (url) {
//                 console.log(url);
//                 setupload(url);
//                 if(url){
//                   setisupload(true)
//                 }
//  });
// })}
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
        {/* <form onSubmit={handleSubmit(onSubmit)}>
     <input required ref={register} type="file" name="document" />
     <button>Submit</button>
   </form> */}
        <h5 className='upload-quote'>Upload Limit is 10mb for Free Users</h5>
        {
          isupload && <a href={upload} target='_blank'><small>{upload}</small></a>
        }
        </Col>
        </Row>
      </Container>
      </div>
    </Jumbotron>
  </div>
}
export default Jumbotronreact;
