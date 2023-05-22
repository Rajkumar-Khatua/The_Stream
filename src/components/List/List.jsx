import { ArrowForwardIosOutlined } from "@mui/icons-material";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { useRef, useState } from "react";
import ListItem from "../ListItems/ListItem";
import "./list.scss";

const List = () => {
  const [sliderNumber, setSliderNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  // to selectr container
  const listRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && sliderNumber > 0) {
      setSliderNumber(sliderNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right" && sliderNumber < 2) {
      setSliderNumber(sliderNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className='List'>
      <div className='listTitle'>Jump to Your favourite Shows </div>
      <div className='wrapper'>
        <ArrowBackIosNewOutlinedIcon
          className='sliderArrow left'
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div
          className='container'
          ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          className='sliderArrow right'
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
