import React from "react";
import { useHistory } from "react-router-dom";
import "./Featured.css";

const Featured = () => {
  const history = useHistory();

  // Define the array of objects containing text for each box
  const boxes = [
    { text: "Pressure test", price: "$10/month", link: "/diet" },
    { text: "sugar test", price: "$20/month", link: "/diet" },
    { text: "blood test", price: "$30/month", link: "/diet" },
    { text: "normal diet", price: "free", link: "/diet" },
  ];

  const handleBoxClick = (link) => {
    history.push(link);
  };

  return (
    <div className="featured-container">
      {boxes.map((box, index) => (
        <div
          key={index}
          className="box"
          onClick={() => handleBoxClick(box.link)}
        > 
          <div className="box-content">
            <div className="text">{box.text}</div>
            <div className="">Goes to a different page for personal plan</div>
            <div className="price">{box.price}</div>
            <button className="click-button">Button</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
