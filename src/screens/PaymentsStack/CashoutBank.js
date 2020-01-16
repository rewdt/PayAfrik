import React from "react";
import { View, Text, ScrollView, Dimensions, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import KeyboardShift from "../../components/KeyboardShift";

const CashoutBank = () => {
  return (
    <KeyboardShift>
      {() => (
        <ScrollView>
          <View style={styles.root}>
            <View style={styles.formContainer}>
              <View style={styles.infoContainer}>
                <Text
                  style={{
                    fontFamily: "Poppins-Bold",
                    color: "#262626",
                    fontSize: 18
                  }}
                >
                  Bank Details
                </Text>
                <Text
                  style={{
                    fontFamily: "Poppins-Bold",
                    fontSize: 12,
                    color: "#262626"
                  }}
                >
                  We'll need the full name used during your KYC verification
                  process!!
                </Text>
              </View>
              <View>
                <TextInput
                  label="Full Name"
                  style={{ backgroundColor: "#fafaff", paddingVertical: 5 }}
                />
                <TextInput
                  label="Bank Name"
                  style={{ backgroundColor: "#fafaff", paddingVertical: 5 }}
                />
                <TextInput
                  label="Account Number"
                  style={{ backgroundColor: "#fafaff", paddingVertical: 5 }}
                />
              </View>
              <View style={{ marginTop: 82, paddingHorizontal: 30 }}>
                <Button
                  mode="contained"
                  theme={{ roundness: 13, colors: { primary: "#ffffff" } }}
                  contentStyle={{ height: 41 }}
                >
                  Proceed
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </KeyboardShift>
  );
};
const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: "#ffffff" },
  formContainer: {
    backgroundColor: "#fafaff",
    paddingHorizontal: 20,
    paddingBottom: 30
  },
  infoContainer: {
    marginTop: 44,
    marginBottom: 17
  }
});
export default CashoutBank;
