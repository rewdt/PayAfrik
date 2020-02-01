import React, { Component } from "react";
import {
  Text,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated
} from "react-native";

export default class SplashScreen extends Component {
  state = {
    animation: new Animated.Value(0)
  };

  handlePress = () => {
    console.log("called");
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 500
    }).start(() =>
      Animated.timing(this.state.animation, {
        toValue: 0,
        duration: 1500
      }).start()
    );
  };

  render() {
    const colorInterpolate = this.state.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ["red", "green"]
    });
    const colorStyle = {
      backgroundColor: colorInterpolate
    };

    return (
      <View style={styles.root}>
        <TouchableWithoutFeedback onPress={this.handlePress}>
          <Animated.View style={[styles.box, colorStyle]}>
            <Text> textInComponent </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: "red"
  }
});
