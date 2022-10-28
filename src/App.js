import React from "react";
import ProfileImage from "../src/img/ProfilePic.jpg";
import Slack from "./img/slack.svg";
import Github from "./img/Social_icon.svg";
import Ingresive from "./img/ingressive.png";
import Zuri from "./img/zuri.png";
import "./index.css";

function App() {
  const buttons = [
    {
      linkName: "Twitter Link",
      href: "https://twitter.com/drdonice",
      id: "twitter",
    },
    {
      linkName: "Zuri Team",
      href: "https://training.zuri.team/",
      id: "btn__zuri",
    },
    {
      linkName: "Zuri Books",
      href: "http://books.zuri.team",
      id: "books",
    },
    {
      linkName: "Python Books",
      href: "https://books.zuri.team/python-for-beginners?ref_id=drdonice",
      id: "book__python",
    },
    {
      linkName: "Background Check for Coders",
      href: "https://background.zuri.team,",
      id: "pitch",
    },
    {
      linkName: "Design Books",
      href: "https://books.zuri.team/design-rules ",
      id: "book__design",
    },
  ];

  return (
    <div className="App">
      <img
        src={ProfileImage}
        alt="Profile"
        id="profile__img"
        className="w-20 mt-6 rounded-full border-sky-500"
      />
      <h1 className="text-2xl py-4 font-bold">Donice Ubaru</h1>

      <div className="w-full">
        {buttons.map((button) => (
          <div className=" bg-gray-200 rounded-lg text-sm p-5 my-5 drop-shadow-[0_15px_25px_rgba(0,0,0,0.02)] hover:drop-shadow-md hover:bg-gray-300">
            <a href={button.href} id={button.id}>
              {button.linkName}
            </a>
          </div>
        ))}
      </div>

      <div className="flex">
        <a href="#" type="hidden" id="slack">
          <img
            src={Slack}
            alt="slack"
            className="w-8 rounded-full border-sky-500 m-2"
          />
        </a>
        <a href="https://github.com/Donice" id="github"> 
          <img
          src={Github}
          alt="github"
          className="w-8 rounded-full border-sky-500 m-2"
        />
        </a>
        
      </div>

      <div className="border w-full mt-8"></div>

      <footer className="my-8 w-full text-left md:flex md:space-x-64 md:justify-center md:align-middle">
        <img src={Zuri} alt="zuri" className="w-30 border-sky-500 mb-2" />
        <span className="text-gray-500 mb-2">
          HNG Internship 9 Frontend Task
        </span>
        <img
          src={Ingresive}
          alt="IG4"
          className="w-36 border-sky-500 mt-2 md:w-28"
        />
      </footer>
    </div>
  );
}

export default App;
