import React from "react";
import "./Tradeticker.css";
import { Link } from "react-router-dom";

const TradingTicker: React.FC = () => {
  return (
    <div className="ticker-container">
      <p className="ticker-text"
      style={{
        fontWeight:"bold"
      }}>
        20% off on your first order! All items are sold at a discount and shipped for free to your Location 
        <Link to={"/collection"}><span>SHOP NOW</span></Link>
      </p>
    </div>
  );
};

export default TradingTicker;