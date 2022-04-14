import React from "react";
import services from "./services.module.css";
const Services = () => {
  return (
    <div className={services.container}>
      <div className={services.heading}>
        <div>
          <div className={services.headingtext}>Services</div>
          <div className={services.headingmargin} />
        </div>
      </div>
      <div className={services.upperbody}>
        <div className={services.elementcontainer}>
          <Element
            image="./images/newbeans.png"
            head="Nepali Coffee Beans"
            desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget"
          />
        </div>
        <div className={services.elementcontainer}>
          {" "}
          <Element
            image="./images/newmachine.png"
            head="Coffee Equipmen"
            desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget"
          />
        </div>
        <div className={services.elementcontainer}>
          {" "}
          <Element
            image="./images/cofeegrinder.png"
            head="Barista Training"
            desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget"
          />
        </div>
      </div>
      <div className={services.lowerbody}>
        <div className={services.elementcontainer}>
          <Element
            image="./images/coffeebiscuit.png"
            head="Bakery Training"
            desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget"
          />
        </div>
        <div className={services.elementcontainer}>
          {" "}
          <Element
            image="./images/newmachine.png"
            head="Coffee farm"
            desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;

const Element = (props) => {
  return (
    <div className={services.element}>
      <img src={props.image} className={services.image} />
      <div className={services.elementhead}>{props.head}</div>
      <div className={services.desc}> {props.desc} </div>
    </div>
  );
};
