import React from "react";
import Ingresive from "../img/ingressive.png";
import Zuri from "../img/zuri.png";
import "../index.css";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="border w-full my-8"></div>
      <div className="mb-8 w-full text-left md:flex md:space-x-64 md:justify-center md:align-middle">
        <img src={Zuri} alt="zuri" className="w-30 border-sky-500 mb-2" />
        <span className="text-gray-500 mb-2">
          HNG Internship 9 Frontend Task
        </span>
        <img
          src={Ingresive}
          alt="IG4"
          className="w-28 border-sky-500 mt-2 md:w-28"
        />
      </div>
    </footer>
  );
};

export default Footer;
