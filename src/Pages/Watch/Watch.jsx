import "./watch.scss";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
const Watch = () => {
  return (
    <div className='Watch'>
      <div className='backBtn'>
        <ArrowBackRoundedIcon />
        Home
      </div>
      <video
        className='video'
        controls
        progress
        src="https://player.vimeo.com/external/536625083.sd.mp4?s=f3f37c88495e95a8be1f1f5835413eafc6805c1b&profile_id=164&oauth2_token_id=57447761"
        />
    </div>
  );
};

export default Watch;
