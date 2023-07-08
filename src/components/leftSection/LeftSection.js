import React from "react";
import style from "./leftSection.module.css"
import { Text } from "../text/Text";
import { List } from "../list/List";

export class LeftSection extends React.Component{
    render() {
        return (
            <div className={ style.leftSectionDiv }>
                <Text />
                <List />
            </div>
        )
    }
}