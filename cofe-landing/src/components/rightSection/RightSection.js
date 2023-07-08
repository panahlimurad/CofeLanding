import React from "react";
import style from "../rightSection/rightSection.module.css";
import { FirstCardText } from "../firstCardText/FirstCardText";
import { TopCardDiv } from "../topCardDiv/TopCardDiv";
import { ProductImgDiv } from "../productImgDiv/ProductImgDiv";



export class RightSection extends React.Component {
  render() {
    return (
      <div className={style.rightSection}>
        <FirstCardText />
        <TopCardDiv  />
        <ProductImgDiv textButton="Button" />
      </div>
    )
  }
}
