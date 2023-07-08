import React from "react";
import style from "./text.module.css";

export class Text extends React.Component{
    render() {
        return (
            <div className={style.text}>
                <h1>Cofee Shop Landing Page</h1>
            </div>
        )
    }
}
