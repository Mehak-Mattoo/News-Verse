import React from "react";

const Spinner = () => {
  const loaderStyles = {
    width: "120px",
    height: "20px",
    borderRadius: "20px",
    background:
      "repeating-linear-gradient(135deg, #f03355 0 10px, #ffa516 0 20px) 0/0% no-repeat, repeating-linear-gradient(135deg, #ddd 0 10px, #eee 0 20px) 0/100%",
    animation: "loaderAnimation 2s infinite",
  };

  const keyframesStyles = `
    @keyframes loaderAnimation {
      100% { background-size: 100%; }
    }
  `;

  return (
    <div className="flex justify-center items-center ">
      <style>{keyframesStyles}</style>
      <span style={loaderStyles}></span>
    </div>
  );
};

export default Spinner;
