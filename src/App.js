import "./styles.css";
import { Component } from "react";
import CustomButton from "./CustomButton";

class App extends Component {
  render() {
    return (
      <>
        <CustomButton text="Button" warnMessage="hi" hint="ad" />
        <CustomButton text="Button" warnMessage="" hint="ad" />
        <CustomButton text="Button" warnMessage="hi" hint="" />
      </>
    );
  }
}

export default App;