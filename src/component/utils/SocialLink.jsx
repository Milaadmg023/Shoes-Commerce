import React from "react";

const SocialLink = ({ icon, url }) => {
  console.log(url);
  const handleClick = () => {
    window.open(url, "_blank"); // Open the URL in a new tab
  };
  return (
    <>
      <img
        src={icon}
        className="w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110"
        alt="social-icon"
        onClick={handleClick}
      />
    </>
  );
};

export default SocialLink;
