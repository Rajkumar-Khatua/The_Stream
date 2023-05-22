import { ChangeCircle } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import ListItem from "../../components/ListItems/ListItem";
import "./profile.scss";
import List from "../../components/List/List";
import Navbar from "../../components/Navbar/Navbar";

const Profile = () => {
  return (
    <div className='Profile'>
      <Navbar />

      <div className='wrapper'>
        <div className='left'>
          <h2>Rajkumar Khatua</h2>
          <div className='persoanlInfo'>
            <span>Change Avatar</span>
            <img
              src='../../../ProfilePic.jpg'
              alt='profile Pic'
              className='ProfileImg'
            />
            <div className='icon'>
              <form>
                <input
                  type='file'
                  id='file'
                  style={{display:'none'}}
                />
                <label htmlFor='file'>
                  <ChangeCircle
                    htmlFor='file'
                    className='Icon'
                  />
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='videosInformation'>
            <span>Saved Videos</span>

            <div className='saved'>{/* <List/> */}</div>
            <div className='liked'>
              <span>Liked Videos</span>
              {/* <List/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
