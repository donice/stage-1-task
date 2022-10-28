import React from "react";
import ProfileImage from "../src/img/ProfilePic.jpg";
import './index.css'

function App() {
  const buttons = [
    {
      linkName: "Twitter Link",
      href: "",
      id: "twitter"
    },
    {
      linkName: "Zuri Team",
      href: "https://training.zuri.team/",
      id: "btn__zuri"
    },
    {
      linkName: "Zuri Books",
      href: "http://books.zuri.team ",
      id: "books"
    },
    {
      linkName: "Background Check for Coders",
      href: "",
      id: ""
    },
    {
      linkName: "Python Books",
      href: "",
      id: "book__python"
    },
  ];

  return (
    <div className="App p-10">
        <img 
          src={ProfileImage} 
          alt="Profile" 
          id="profile__img"
          className="w-20 rounded-full border-sky-500"
          />
          <h1 className="text-xl py-4 font-bold">Donice Ubaru</h1>

      <div>
        {buttons.map((button) => (
            <a href={button.href} id={button.id} className="text-sm py-5 m-2">{button.linkName}</a>
        ))}
      </div>
    </div>
  );
}

export default App;
