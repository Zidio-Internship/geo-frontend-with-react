import React from "react";
import Search from "./images/search-normal.png";
import Delete from "./images/solar_trash-bin-2-bold.png";
import User1 from "./images/User profile img 1.png";
import User2 from "./images/User profile img 2.png";
import Edit from "./images/edit 1.png";
import Vector from "./images/Vector 1.png";
import Default from "./images/defualt.png";
import Silver from "./images/silver.png";
import Aubergine from "./images/aubergine.png";
import Night from "./images/night.png";
import Dark from "./images/retro.png";
import Retro from "./images/dark retro.png";
import Apply from "./images/Apply.png";

function settings() {
  return (
    <body>
      <header>
        <p className="set">Settings</p>
        <div className="ezra">
          <input
            className="input1"
            placeholder="Search for places, shops and codes"
            type="search"
          />
          <img src={Search} alt="" className="alt" />
        </div>
        <div className="src">
          <img src={User1} alt="" className="use"/>
          <div className="div">
            <p className="bright">Bright Orji</p>
            <p className="brigh">@brightorji</p>
          </div>
        </div>
      </header>

      <div className="oppo">
        <div className="name">
          <p className="adde">Settings</p>
          <p className="add">Adjust it to your preferences</p>
        </div>
        <div className="btt">
          <button className="btn">Delete Account</button>
          <img src={Delete} alt="" className="del" />
        </div>
      </div>

      <section>
        <div className="codex">
          <div className="srcc">
            <img src={User2} alt="" className="usee"/>
            <div className="divv">
              <p className="bright">Bright Orji</p>
              <p className="brigh">@brightorji</p>
            </div>
          </div>
          <div className="code">
            <button className="npm">codexboogie@gmail.com</button>
            <img src={Edit} alt="" className="img" />
          </div>
        </div>

        <img src={Vector} alt="" className="vector" />

        <p className="display">Display preferences in map</p>

        <div className="man">
          <div className="pawn">
            <div className="bean">
              <img src={Default} alt="" className="css" />
              <img src={Silver} alt="" className="css" />
              <img src={Aubergine} alt="" className="css" />
            </div>

            <div className="beans">
              <img src={Night} alt="" className="css" />
              <img src={Retro} alt="" className="css" />
              <img src={Dark} alt="" className="css" />
            </div>
          </div>
          <div>
            <img src={Apply} alt="" className="app" />
          </div>
        </div>
        <img src={Vector} alt="" className="vector" />

        <div className="aza">
          <p>Account settings</p>
          <p className="pin">Two pin authentication</p>
        </div>
      </section>
    </body>
  );
}

export default settings;
