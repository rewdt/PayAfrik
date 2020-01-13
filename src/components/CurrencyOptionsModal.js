import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Portal, Modal, RadioButton } from "react-native-paper";
import { TouchableHighlight } from "react-native-gesture-handler";

const CurrencyOptionsModal = props => {
  const [selected, setSelected] = useState("a");
  return (
    <Portal>
      <Modal {...props}>
        <View style={styles.contentContainer}>
          <View style={styles.modalHeader}>
            <Text>To</Text>
            <TouchableHighlight onPress={() => props.setVisible(false)}>
              <Text>x</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.contentBodyStyle}>
            <ScrollView>
              {["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"].map(e => (
                <RadioButton.Group
                  onValueChange={value => setSelected(value)}
                  value={selected}
                >
                  <TouchableOpacity
                    style={styles.btnContainer}
                    key={e}
                    onPress={() => setSelected(e)}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Image
                        source={require("../../assets/btc.png")}
                        style={{ height: 30, width: 30 }}
                      />
                      <View style={{ paddingLeft: 10 }}>
                        <Text style={styles.currencyName}>0 BTC</Text>
                        <Text style={styles.currencyPercentage}>0.00%</Text>
                      </View>
                    </View>
                    <RadioButton value={e} />
                  </TouchableOpacity>
                </RadioButton.Group>
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

export default CurrencyOptionsModal;
