import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <video id="my-video" className="video-js" controls preload="auto" poster="https://res.cloudinary.com/weknow-creators/image/upload/c_scale,w_1280/v1647843623/wallhaven-83g6zy_i52wko.png" data-setup loop>
        <source src="https://nl27.seedr.cc/ff_get/1135334119/You.Are.Not.My.Mother.2021.1080p.WEBRip.x264-RARBG.mp4?st=TQdJoXJfXKQCawl5r5xZIQ&e=1648369414" type="video/mp4" />
      </video>
    <Helmet>
    <script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js" 
    type="text/javascript" />
    </Helmet>
  );
}

export default App;
