import React from "react";

const footerHeight = 100;
const footerEltMarginTop = 15;

const div1Style = {
  width: "100vw",
  height: `${footerHeight + footerEltMarginTop}px`,
  backgroundColor: "blue",
  marginTop: "30px",
  position: "absolute",
  zIndex: -1, // Alt katmanda görünmesi için
};

const div2Style = {
  width: "100%",
  position: "absolute",
  color: "white",
  height: `${footerHeight}px`,
  marginTop: `${footerEltMarginTop}px`,
  display: "flex",
  alignItems: "center", // İçeriği dikey olarak ortalamak için
  justifyContent: "center", // İçeriği yatay olarak ortalamak için
};

const Footer: React.FC = () => {
  return (
    <footer style={{ width: "100%", position: "relative" }}>
      <div style={div1Style}></div>
      <div style={div2Style}>
        <div>Footer content</div>
      </div>
    </footer>
  );
};

export default Footer;
