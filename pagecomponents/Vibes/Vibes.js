import React from "react";
import vibes from "./vibes.module.css";

const Vibes = () => {
  return (
    <div className={vibes.container}>
      <div className={vibes.headconatiner}>
        <div>
          {" "}
          <div className={vibes.heading}>feel the vibe of our customers</div>
          <div className={vibes.headingunderline} />
        </div>
      </div>
      <div className={vibes.innercontainer}>
        <div style={{ position: "relative" }} className={vibes.imagecontainer}>
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Element />
          </div>
        </div>
        <div style={{ position: "relative" }} className={vibes.imagecontainer}>
          <img src="./images/commentbackground.PNG" className={vibes.image} />
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Element />
          </div>
        </div>
        <div style={{ position: "relative" }} className={vibes.imagecontainer}>
          <div
            style={{
              position: "absolute",
              top: "45%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Element />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vibes;

const Element = (props) => {
  return (
    <div className={vibes.element}>
      <div className={vibes.elementtext}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus
      </div>
      <div className={vibes.profile}>
        <img src="./images/profilepic.PNG" className={vibes.profilepic} />
        <div className={vibes.name}>Jane Doe</div>
      </div>
    </div>
  );
};
