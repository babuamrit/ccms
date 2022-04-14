import React from "react";
import Button from "../../components/Button";
import menu from "./menu.module.css";
const Menu = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: "5", position: "relative" }}>
        <img src="./images/item3.png" className={menu.item3} />
        <img src="./images/item2.png" className={menu.item2} />
        <img src="./images/item1.png" className={menu.item1} />
      </div>
      <div style={{ backgroundColor: "#fffcf9", flex: "5" }}>
        <div style={{ display: "flex" }} className={menu.headcontainer}>
          <div>
            <div className={menu.head}>Drinks</div>
            <div
              style={{
                marginTop: "19px",
                height: "4px",
                background: "#E68100",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
          className={menu.menucontainer}
        >
          {menudata.map((value) => (
            <MeniItem key={value.name} {...value} />
          ))}
          <div style={{ display: "flex" }}>
            <Button
              styles={{
                color: "#472B1B",
                height: "55px",
                display: "flex",
                paddingLeft: "34px",
                paddingRight: "34px",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "#472B1B",
              }}
            >
              View Full Menu{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

const MeniItem = (props) => {
  return (
    <div style={{ width: "88%" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{ fontSize: "22px", fontFamily: "Inter", color: "#4A302C" }}
        >
          {props.name}
        </div>
        <div
          style={{
            height: "1px",
            backgroundColor: "#85726F",
            flex: "1",
            alignSelf: "flex-end",
            marginLeft: "20px",
            marginRight: "10px",
            marginBottom: "4px",
          }}
        />
        <div
          style={{
            color: "#555555",
            fontWeight: "bold",
            fontSize: "22px",
            fontFamily: "Inter",
          }}
        >
          {props.price}
        </div>
      </div>
      <div
        style={{
          width: "70%",
          color: "#E68100",
          fontFamily: "Inter",
          fontSize: "16px",
          lineHeight: "25px",
        }}
        className={menu.desc}
      >
        {props.descrip}
      </div>
    </div>
  );
};

const menudata = [
  {
    name: "Totally Freshly Brewed",
    price: "   Rs 250",
    descrip:
      " Be Bold, Ask for brewed coffee. No milk, no sugar, nothing gets in theway of you and the pure flavo",
  },
  {
    name: "Café AU LAIT",
    price: "   Rs 250",
    descrip: "Freshly Brewed Coffee with Milk",
  },
  {
    name: "Totally Freshly Brewed",
    price: "   Rs 250",
    descrip:
      " Be Bold, Ask for brewed coffee. No milk, no sugar, nothing gets in theway of you and the pure flavo",
  },
  {
    name: "Café AU LAIT",
    price: "   Rs 250",
    descrip: "Freshly Brewed Coffee with Milk",
  },
];
