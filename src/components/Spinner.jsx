import React from "react";

const Spinner = () => {
  const loaderStyles = {
    width: "30vw", // Responsive width
    maxWidth: "120px", // Maximum width
    height: "2vh", // Responsive height
    maxHeight: "20px", // Maximum height
    borderRadius: "20px",
    background:
      "repeating-linear-gradient(135deg, #f5a623 0 10px, #d2691e 0 20px) 0/0% no-repeat, repeating-linear-gradient(135deg, #ddd 0 10px, #eee 0 20px) 0/100%",
    animation: "loaderAnimation 2s infinite",
  };

  const keyframesStyles = `
    @keyframes loaderAnimation {
      100% { background-size: 100%; }
    }
  `;

  return (
    <div className="flex justify-center items-center mx-auto">
      <style>{keyframesStyles}</style>
      <span style={loaderStyles}></span>
    </div>
  );
};

export default Spinner;
