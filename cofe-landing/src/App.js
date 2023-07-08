import React from "react";
import "./styles/global.css";
import { LeftSection } from "./components/leftSection/LeftSection";
import { RightSection } from "./components/rightSection/RightSection";

export class App extends React.Component {
  render() {
    return (
      <main>
        <LeftSection />
        <RightSection />
      </main>
    );
  }
}
