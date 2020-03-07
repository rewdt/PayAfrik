import React from "react";
import { Image, Text, View } from "react-native";
import { connect } from "react-redux";
import { AppLoading, SplashScreen as Splash } from "expo";
import { Asset } from "expo-asset";

class SplashScreen extends React.Component {
  state = { areResourcesReady: false };

  constructor(props) {
    super(props);
    Splash.preventAutoHide(); // Instruct SplashScreen not to hide yet
  }

  componentDidMount() {
    this.cacheResourcesAsync() // ask for resources
      .then(() => this.setState({ areResourcesReady: true })) // mark resources as loaded
      .catch(error =>
        console.error(`Unexpected error thrown when loading:
${error.stack}`)
      );
  }

  routeOutSplash = () => {
    // console.log(this.props.user);
    this.props.navigation.navigate("AuthStack");
  };

  render() {
    if (!this.state.areResourcesReady) {
      return null;
    }

    return (
      <View style={{ flex: 1, backgroundColor: "#f0f0f7" }}>
        <Image
          style={{
            flex: 1,
            resizeMode: "contain",
            width: undefined,
            height: undefined
          }}
          source={require("../../assets/SplashImg.png")}
          onLoadEnd={() => {
            console.log("Image#onLoadEnd: hiding SplashScreen");
            this.routeOutSplash();
            Splash.hide(); // Image is fully presented, instruct SplashScreen to hide
          }}
          fadeDuration={0} // we need to adjust Android devices (https://facebook.github.io/react-native/docs/image#fadeduration) fadeDuration prop to `0` as it's default value is `300`
        />
      </View>
    );
  }

  async cacheResourcesAsync() {
    const images = [require("../../assets/SplashImg.png")];
    const cacheImages = images.map(image =>
      Asset.fromModule(image).downloadAsync()
    );
    return Promise.all(cacheImages);
  }
}

const mapStateToProps = state => ({
  user: state.AuthReducer.authDetails
});

export default connect(mapStateToProps)(SplashScreen);
