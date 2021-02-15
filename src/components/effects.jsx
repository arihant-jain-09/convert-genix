import music from '../effectimages/music.png'
import mp3 from '../effectimages/mp3.png'
import aac from '../effectimages/aac.png'
import mp4 from '../effectimages/mp4.png'
import wmv from '../effectimages/wmv.png'
import upload from '../effectimages/upload.png'
import rightarrow from '../effectimages/rightarrow.png'
import algorithm from '../effectimages/algorithm.png'
import convert from '../effectimages/convert.png'
function Effects(){
  return  <div>
    <img className="music" src={music}  alt='music'/>
    <img class="mp3" src={mp3} alt='mp3'/>
    <img class="aac" src={aac} alt='aac'/>
    <img class="mp4" src={mp4} alt='mp4'/>
    <img class="wmv" src={wmv} alt='wmv'/>
    <img className="rightarrow left" src={rightarrow} alt='arrow' />
    <img  className="upload left" src={upload} alt='upload'/>
    <img  className="rightarrow" src={rightarrow} alt='arrow'/>
    <img  className="algorithm left" src={algorithm} alt='algorithm'/>
    <img  className="rightarrow left" src={rightarrow} alt='arrow'/>
    <img  className="convert left" src={convert} alt='convert'/>
</div>
}
export default Effects;
