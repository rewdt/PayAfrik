import React, { Component } from "react";
import * as Font from "expo-font";
import { StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { AppLoading } from "expo";
import FlashMessage from "react-native-flash-message";
import { PersistGate } from "redux-persist/integration/react";
import AppContainer from "./src/navigation";
import configureStore from "./src/store";

export const { store, persistor } = configureStore();

export default class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Poppins-Black": require("./resources/fonts/Poppins-Black.ttf"),
      "Poppins-Bold": require("./resources/fonts/Poppins-Bold.ttf"),
      "Poppins-ExtraBoldItalic": require("./resources/fonts/Poppins-ExtraBoldItalic.ttf"),
      "Poppins-Regular": require("./resources/fonts/Poppins-Regular.ttf"),
      "Poppins-SemiBold": require("./resources/fonts/Poppins-SemiBold.ttf"),
      "Poppins-Medium": require("./resources/fonts/Poppins-Medium.ttf"),
      "Poppins-Thin": require("./resources/fonts/Poppins-Thin.ttf"),
      fontello: require("./resources/fonts/fontello.ttf")
    });
    // StatusBar.setTranslucent(false);
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
            <AppContainer />
            <FlashMessage
              position="top"
              renderFlashMessageIcon={this.renderFlashMessageIcon}
            />
          </PaperProvider>
        </PersistGate>
      </StoreProvider>
    );
  }
}
