import React from "react";
import myVideo from "../../assets/digi-market1.mp4";

const VideoComponent = () => {
  return (
    <div className="video-container">
      <video
        src={myVideo}
        width="100%"
        autoPlay
        muted
        loop
        className="cropped-video"
      />
    </div>
  );
};

export default VideoComponent;
