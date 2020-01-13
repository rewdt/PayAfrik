import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Portal, Modal } from "react-native-paper";
import { TouchableHighlight } from "react-native-gesture-handler";

const DashboardWalletModal = props => {
  return (
    <Portal>
      <Modal {...props}>
        <View style={styles.contentContainer}>
          <View style={styles.modalHeader}>
            <Text>Wallets</Text>
            <TouchableHighlight onPress={() => props.setVisible(false)}>
              <Text>x</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.contentBodyStyle}>
            <ScrollView>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 34].map(e => (
                <TouchableOpacity style={styles.btnContainer} key={e}>
                  <View
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <Image
                      source={require("../../assets/btc.png")}
                      style={{ height: 30, width: 30 }}
                    />
                    <Text style={styles.currencyPercentage}>0.00%</Text>
                  </View>
                  <View>
                    <Text style={styles.currencyName}>0 BTC</Text>
                    <Text>$0.00</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    height: 280,
    bottom: 100,
    backgroundColor: "#ffffff"
  },
  modalHeader: {
    height: 28.5,
    borderWidth: 1,
    paddingLeft: 30,
    paddingRight: 20,
    borderColor: "#e5e5f1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  contentBodyStyle: {
    height: 251.5
  },
  btnContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 20
  },
  currencyName: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 15,
    color: "#262626"
  },
  currencyPercentage: {
    fontFamily: "Poppins-Medium",
    fontSize: 7,
    color: "rgba(142, 145, 188, 0.75)"
  }
});

export default DashboardWalletModal;
