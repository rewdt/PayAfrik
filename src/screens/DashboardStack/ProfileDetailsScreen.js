import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { Button } from "react-native-paper";

const { width, height } = Dimensions.get("window");

const ProfileDetailsScreen = () => {
  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={{ height: height + 50 }}>
        <View style={[styles.contentItemContainer, { marginTop: 37 }]}>
          <Text style={styles.labelText}>First Name</Text>
          <Text style={styles.valueText}>John</Text>
        </View>
        <View style={[styles.contentItemContainer]}>
          <Text style={styles.labelText}>Last Name</Text>
          <Text style={styles.valueText}>Doe</Text>
        </View>
        <View style={[styles.contentItemContainer]}>
          <Text style={styles.labelText}>Phone Number</Text>
          <Text style={styles.valueText}>+2348101614544</Text>
        </View>
        <View style={[styles.contentItemContainer, { alignItems: null }]}>
          <Text style={[styles.labelText, { alignSelf: "center" }]}>Email</Text>
          <View
            style={{
              paddingTop: 2,
              alignSelf: "center"
            }}
          >
            <Text style={styles.confirmationText}>Confirmation Required</Text>
            <Text style={styles.valueText}>johndoe@gmail.com</Text>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            paddingVertical: 10
          }}
        >
          <Text style={{ textAlign: "center" }}>
            If you didn't receive our email please click&nbsp;
            <Text
              style={{
                color: "#0115fb",
                fontFamily: "Poppins-Medium",
                textDecorationLine: "underline"
              }}
            >
              Resend
            </Text>
          </Text>
        </View>
        <View style={[styles.contentItemContainer]}>
          <Text style={styles.labelText}>Country</Text>
          <Text style={styles.valueText}>Nigeria</Text>
        </View>
        <View style={[styles.contentItemContainer]}>
          <Text style={styles.labelText}>City</Text>
          <Text style={styles.valueText}>Abuja</Text>
        </View>
        <View style={[styles.contentItemContainer, { marginBottom: 26 }]}>
          <Text style={styles.labelText}>Zip Code</Text>
          <Text style={styles.valueText}>9000008</Text>
        </View>
        <View
          style={{
            height: "100%",
            width: "100%",
            paddingHorizontal: 20,
            backgroundColor: "#ffffff"
          }}
        >
          <View style={{ paddingTop: 32 }}>
            <Text
              style={{
                marginBottom: 28,
                fontSize: 12,
                fontFamily: "Poppins-Regular",
                textAlign: "center"
              }}
            >
              You can't change your personal data in your profile without
              contacting support
            </Text>
            <Button
              theme={{ colors: { primary: "#ffffff" } }}
              mode="contained"
              uppercase={false}
            >
              Contact Support
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#f0f0f7"
  },
  contentItemContainer: {
    height: 57,
    paddingHorizontal: 20,
    marginBottom: 5,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    flexDirection: "row"
  },
  labelText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: "#262626"
  },
  valueText: {
    fontFamily: "Poppins-Bold",
    fontSize: 12,
    color: "#262626"
  },
  confirmationText: {
    color: "#ff0000",
    fontFamily: "Poppins-Bold",
    fontSize: 10
  }
});

export default ProfileDetailsScreen;
