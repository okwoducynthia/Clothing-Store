import React from "react";
import "./Tradeticker.css";

const TradingTicker: React.FC = () => {
  return (
    <div className="ticker-container">
      <p className="ticker-text"
      style={{
        fontWeight:"bold"
      }}>
        20% off on your first order! All items are sold at a discount and shipped for free to your Location <span>SHOP NOW</span>
      </p>
    </div>
  );
};

export default TradingTicker;