import React, { Component } from "react";
import * as Font from "expo-font";
import Onboarding from "./src/screens/Onboarding";
import { AppLoading } from "expo";

export default class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Poppins-Black": require("./resources/fonts/Poppins-Black.ttf"),
      "Poppins-Bold": require("./resources/fonts/Poppins-Bold.ttf"),
      "Poppins-Regular": require("./resources/fonts/Poppins-Regular.ttf")
    });
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return <Onboarding />;
  }
}
