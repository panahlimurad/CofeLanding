import React from "react";
import style from "../topCardDiv/topCardDiv.module.css"
import { FiCoffee } from "react-icons/fi";
import PropTypes from "prop-types";



export class TopCardDiv extends React.Component {
  
  static defaultProps = {
  component: "p",
  }
  
  render() {

    const data = [
      {
        title1: "Supreme Beans",
        title2: "Beans that provides great taste",
      },
      {
        title1: "High Quality",
        title2: "We provide the highest quality",
      },
      {
        title1: "Extraordinary",
        title2: "Cofee like you have necer texted",
      },
    ];

    return (
      <div className={style.topCardDiv}>
        {data.map((item, index) => (
          <div key={index} className={style.topCardsProduct}>
            <div className={style.icon}>
              <FiCoffee />
            </div>
            <div className={style.textCard}>
              <p>{item.title1}</p>
              <p>{item.title2}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

TopCardDiv.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
};

