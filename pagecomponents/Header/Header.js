import React from "react";
import Button from "../../components/Button";
import NoSsr from "../../components/no-ssr";
import header from "./header.module.css";

const Header = () => {
  const [width, setwidth] = React.useState(false);
  const [itemheight, setiwidth] = React.useState("60vh");
  React.useEffect(() => {
    if (width) {
      const demn = width - 210;
      setiwidth(demn + "px");
    } else {
      setwidth(true);
    }
  }, [width]);

  const link = [
    "Menu",
    "Services",
    "About Us",
    "Location",
    "Francise",
    "Contact Us",
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        fontFamily: "SF Pro Display",
      }}
    >
      <NoSsr>
        <Heightop getwidth={() => {}} />
      </NoSsr>
      <div className={header.container}>
        <img src="./images/logo.svg" className={header.logo} />
        <div className={header.linkcontainer}>
          {link.map((value) => (
            <Button key={value} styles={{ color: "#4a302c", fontSize: "18px" }}>
              {value}
            </Button>
          ))}
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <img
          src="./images/bima.jpeg"
          style={{
            width: "100%",
            height: "inherit",
            marginTop: "10px",

            objectFit: "fill",
            backgroundColor: "red",
          }}
        />
        <div
          style={{
            width: "400px",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "43px",
              fontStyle: "normal",
              fontWeight: "700",
              fontFamily: "roboto slab",
              paddingBottom: "28px",
            }}
          >
            From Crop to Cup
          </div>
          <div
            style={{
              lineHeight: "25px",
              fontWeight: "400",
              fontSize: "16px",
              marginBottom: "25px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetuer adips cing elit, sed diam
            nonummy nibh euismod tinci{" "}
          </div>
          <Button
            styles={{
              width: "183px",
              height: "63px",
              backgroundColor: "black",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderColor: "white",
              borderStyle: "solid",
              boderWidth: "1px",
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

const Heightop = (props) => {
  const { innerWidth: width, innerHeight: height } = window;
  props.getwidth(height);
  return <></>;
};
