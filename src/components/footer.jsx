import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black-100 text-center shadow-inner">
      <p className="text-white text-lg sm:text-xl font-semibold tracking-wide">
        Crafted with{" "}
        <span className="text-red-500 text-3xl inline-block animate-pulse">❤️</span> by{" "}
        <span className="text-purple-400">Abhishek Raj</span>
      </p>
    </footer>
  );
};

export default Footer;
