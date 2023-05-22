import React from "react";
import "./home.scss";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/Featured/Featured";
import List from "../../components/List/List";

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured type='series' />
      <List/>
      <List/>
      <List/>
   
    </div>
  );
};

export default Home;
