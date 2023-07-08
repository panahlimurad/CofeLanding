import React from "react";
import style from "./firstCardText.module.css"

export class FirstCardText extends React.Component{
    render() {
        return (
          <div className={style.firstCardText}>
                <p>Why Are we different</p>
                <p>We dont just make your cofee, we make your day</p>
          </div>
        );
    }
}