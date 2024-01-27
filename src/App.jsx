import React from 'react'
import styles from './style';
import { Navbar, Captures, Projects, Contact, Footer, Hero} from './components';
import * as handTrack from 'handtrackjs';
// import { mouseMove } from 'hapi-robots';
// import { moveMouse } from 'robotjs';

const videoElement = document.getElementById('video');

// // load the hand tracking model
// handTrack.load().then(model => {
//   // start the video feed and start tracking hands
//   handTrack.startVideo(videoElement).then(status => {
//     if (status) {
//       console.log("Video started");
//       // set up a callback to be called every time a hand is detected
      
      
//       model.detect(videoElement).then(predictions => {
//         console.log("Predictions: ", predictions);
//         const [x, y] = predictions[0].bbox;
//             // use the coordinates to move the mouse cursor
//         const cursorX = x + window.scrollX;
//         const cursorY = y + window.scrollY;
//         // moveMouse(cursorX, cursorY);
        
      
//       });
//     }
//   });
// });

let cursor = document.getElementById("cursor");
function isTouchDevice(){
  try{
    document.createEvent("TouchEvent");
    return true;    
  }
  catch(e){
    return false;
  }
}

const move = (e) => {
  try{
    var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
    var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
  }
  catch(e) {
  }
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};

document.addEventListener("mousemove", (e) => {
  move(e);
})
 
document.addEventListener("touchmove", (e) => {
  move(e);
})

const App = () => (
  
  <div className="bg-black-gradient w-full overflow-hidden">
    {/* <div id="cursor" /> */}
      <Navbar />
    <div className={`bg-black-gradient ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    {/* <video id="video" width="300" height="200"></video> */}

    <div className={`bg-black-gradient ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Projects />
        <Captures/>
        <Contact />
        <Footer /> 
      </div>
    </div>
    {/* <video id="video" width="300" height="200" /> */}

  </div>
);

export default App