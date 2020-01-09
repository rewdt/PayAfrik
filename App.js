import React, { Component } from "react";
import * as Font from "expo-font";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { AppLoading } from "expo";
import AppContainer from "./src/navigation";

export default class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Poppins-Black": require("./resources/fonts/Poppins-Black.ttf"),
      "Poppins-Bold": require("./resources/fonts/Poppins-Bold.ttf"),
      "Poppins-Regular": require("./resources/fonts/Poppins-Regular.ttf"),
      "Poppins-SemiBold": require("./resources/fonts/Poppins-SemiBold.ttf"),
      "Poppins-Medium": require("./resources/fonts/Poppins-Medium.ttf")
    });
    // StatusBar.setTranslucent(false);
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <PaperProvider>
        <StatusBar translucent={false} hidden={false} barStyle="dark-content" />
        <AppContainer />
      </PaperProvider>
    );
  }
}
