import React from "react";
import Feed from "../../components/feed/feed";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Feed />
      </div>
    </>
  );
};
export default Home;
