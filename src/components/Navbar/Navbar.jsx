import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className='container'>
        <div className='left'>
          <span className='logo'>THE STREAM</span>
        </div>
        <div className='middle'>
          <div className='links'>
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
        </div>
        <div className='right'>
          <div className='profile'>
            <div className="search">
              <input type="text" />
            <SearchIcon className='Icon' />
            </div>
            <span>KIDS</span>
            <NotificationsIcon className='Icon' />
            <span>Rajkumar Khatua</span>
            <img
              src='https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              alt=''
              className='proPic'
            />
            <div className='personal'>
              <ArrowDropDownOutlinedIcon className='Icon' />
              <div className='options'>
                <span>
                  Settings <LogoutRoundedIcon className='SIcon' />
                </span>
                <span>
                  Logout
                  <SettingsRoundedIcon className='SIcon' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
