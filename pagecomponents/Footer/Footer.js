import React from "react";
import Button from "../../components/Button";
import footer from "./footer.module.css";

const Footer = () => {
  return (
    <div className={footer.container}>
      <Locate />
      <AboveFooter />
      <RealFooter />
    </div>
  );
};

export default Footer;

const Locate = () => (
  <div className={footer.locate}>
    <div className={footer.locateinner}>
      <div className={footer.locateheading}>Find Himalayan Java near you</div>
      <div className={footer.locatedesc}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.
      </div>
      <Button
        styles={{
          marginTop: "50px",
          width: "200px",
          height: "70px",
          fontSize: "22px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: "#472B1B",
          color: "#4A302C",
        }}
      >
        Find Us
      </Button>
    </div>
  </div>
);

const AboveFooter = () => (
  <div className={footer.abovecontainer}>
    <div className={footer.aboveheading}>#javanepal</div>
    <div className={footer.abovetext}>
      Liked Our Coffee? Share your moments with us. Follow us on Instagram.
    </div>
    <div className={footer.imagecontainer}>
      <img className={footer.aboveimage} src="./images/girlreading.jpg" />
      <img className={footer.aboveimage} src="./images/table.jpg" />
      <img className={footer.aboveimage} src="./images/paper.jpg" />
      <img className={footer.aboveimage} src="./images/table.jpg" />
    </div>
  </div>
);

const RealFooter = () => (
  <div className={footer.realfooter}>
    <img src="./images/footerimage.png" className={footer.footerimage} />
    <div className={footer.footertext}>
      Tridevi marg, Thamel Kathmandu, Nepal
    </div>
    <div className={footer.footertext}>info@himalyanjava.com</div>
    <div className={footer.footertext}>+977-[0]1-4422519</div>
    <div className={footer.footerbutton}>
      <Button>
        <img src="./images/fbicon.png" />
      </Button>
      <Button>
        <img src="./images/instalogo.png" />
      </Button>
      <Button>
        <img src="./images/twitter.png" />
      </Button>
    </div>
  </div>
);
