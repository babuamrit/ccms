import React from "react";
import Footer from "../pagecomponents/Footer/Footer";
import Header from "../pagecomponents/Header/Header";
import Menu from "../pagecomponents/MenuandServices/Menu";
import Services from "../pagecomponents/Services/Services";
import Vibes from "../pagecomponents/Vibes/Vibes";

const home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Header />
      <Menu />
      <Services />
      <Vibes />
      <Footer />
    </div>
  );
};

export default home;
