import "./listItem.scss";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import TimelapseOutlinedIcon from "@mui/icons-material/TimelapseOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';

import { useState } from "react";

const ListItem = ({ index }) => {
  const [isHover, setIsHover] = useState(false);
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div
      className='ListItem'
      style={{ left: isHover && index * 230 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}>
      <img
        src='https://upload.wikimedia.org/wikipedia/en/f/fd/Me_Before_You_%28film%29.jpg'
        alt=''
        className='movieThubnail'
      />
      {isHover && (
        <>
          <video
            src={trailer}
            autoPlay={true}
            loop
          />
          <div className='itemInfo'>
            <div className='icons'>
              <PlayCircleOutlineOutlinedIcon className='icon' />
              <AddCircleOutlineRoundedIcon className='icon' />
              <FavoriteBorderOutlinedIcon className='icon' />
              <ThumbDownOutlinedIcon className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span>
                1 hour 14 mins <TimelapseOutlinedIcon className='InfoTIcon' />
              </span>
              <span className='limit'>
                +16 <CancelOutlinedIcon className='InfoTIcon' />
              </span>
              <span className="limit">1999 <EventNoteOutlinedIcon className='InfoTIcon' /></span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className='genre'>Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
