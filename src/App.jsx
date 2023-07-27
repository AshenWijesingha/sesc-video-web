import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  useEffect(() => {
    const video = document.getElementById("videoPlayer");

    // Request fullscreen for different browser versions
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }

    // Play the video
    video.play();
  }, []);

  return (
    <div className="App">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/sesc-orientation.appspot.com/o/SESC%20logo.png?alt=media&token=1cee1d8b-85d7-4b4d-a93f-dc2b98624049"
        alt="Logo"
        className="App-logo"
      />
      <h1>Software Engineering Orientation</h1>
      <h2>- 2023 -</h2>
      <main>
        <h3>Software Engineering Orientation 2023</h3>
        <video id="videoPlayer" controls loop>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/sesc-orientation.appspot.com/o/SESC%202023%20-%20Orientation%20Intro.mp4?alt=media&token=6f379615-ee46-483d-b9b2-b8f091ff9f6a"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <br></br>
        <h3>Software Engineering Student Community 23 | 24</h3>
        <video id="videoPlayer" controls loop>
          <source
            src="https://firebasestorage.googleapis.com/v0/b/sesc-orientation.appspot.com/o/SESC%202023%20Intro.mp4?alt=media&token=bad7caec-31aa-478b-b950-497969ad4f84"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <br></br>
        {/* <div className="pdf-reader">
          <h2>How to Start Youre 3rd Year</h2>
          <iframe
            title="How to Start Youre 3rd Year"
            src="https://firebasestorage.googleapis.com/v0/b/sesc-orientation.appspot.com/o/How%20to%20Start%20Your%203rd%20Year.pdf?alt=media&token=ea2e7e4d-065f-4292-a9d1-fc890132dd53"
            width="100%"
            height="500px"
          ></iframe>
        </div> */}
      </main>

      <p>© {new Date().getFullYear()} Ashen Wijesingha</p>
    </div>
  );
};

export default App;
