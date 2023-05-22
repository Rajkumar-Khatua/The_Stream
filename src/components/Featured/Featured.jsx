import React from "react";
import "./featured.scss";
import PlayCircleOutlineOutlinedIcon from "@mui/icons-material/PlayCircleOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Featured = ({ type }) => {
  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === "series" ? "Series" : "Movies"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src='https://images.pexels.com/photos/906024/pexels-photo-906024.jpeg?auto=compress&cs=tinysrgb&w=1600'
        alt=''
        className='FeatuedImg'
      />
      <div className='info'>
        <img
          src='https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
          className='infoImg'
        />
        <h2 className='title'>The Game Changer</h2>
        <span className='desc'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque ad
          nobis voluptate, officiis soluta assumenda libero earum aperiam
          distinctio repellendus eligendi modi aut quisquam ea ducimus dicta
          nisi fuga, laboriosam neque quasi. Nam tempora magnam, inventore
          perspiciatis voluptatem consectetur eaque aliquam repellat excepturi,
          accusamus placeat?
        </span>
        <div className='buttons'>
          <button className='play'>
            <span>Play</span>
            <PlayCircleOutlineOutlinedIcon />
          </button>
          <button className='informationBtn'>
            <span> More Information</span> <InfoOutlinedIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
