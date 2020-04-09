import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import lodash from "lodash";
import { MaterialIcons } from "@expo/vector-icons";
import { Portal, Modal, RadioButton } from "react-native-paper";

const CurrencyOptionsModal = (props) => {
  const [selected, setSelected] = useState("afk");

  const data = [
    {
      key: "btc",
      value: props.btc_balance,
      icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/1.png"
    },
    {
      key: "afk",
      value: props.balance,
      icon: "https://i.imgur.com/U2dFBuZ.png"
    },
    {
      key: "eth",
      value: props.eth_balance,
      icon: "https://s2.coinmarketcap.com/static/img/coins/200x200/1027.png"
    }
  ];

  const onDismiss = () => {
    props.setVisible(false);
  };
  return (
    <Portal>
      <Modal {...props} onDismiss={onDismiss}>
        <View style={styles.contentContainer}>
          <View style={styles.modalHeader}>
            <Text>To</Text>
            <TouchableOpacity onPress={() => props.setVisible(false)}>
              <MaterialIcons name="close" size={30} />
            </TouchableOpacity>
          </View>
          <View style={styles.contentBodyStyle}>
            {!lodash.isEmpty(props.currencies) ? (
              <ScrollView>
                {data.map((e) => (
                  <RadioButton.Group
                    key={e.key}
                    onValueChange={(value) => setSelected(value)}
                    value={selected}
                  >
                    <TouchableOpacity
                      style={styles.btnContainer}
                      key={e.key}
                      onPress={() => setSelected(e.key)}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Image
                          source={{ uri: e.icon }}
                          style={{ height: 30, width: 30 }}
                        />
                        <View style={{ paddingLeft: 10 }}>
                          <Text style={styles.currencyName}>
                            {e.value} {e.key}
                          </Text>
                          <Text style={styles.currencyPercentage}>0.00%</Text>
                        </View>
                      </View>
                      <RadioButton value={e.key} />
                    </TouchableOpacity>
                  </RadioButton.Group>
                ))}
              </ScrollView>
            ) : (
              <ActivityIndicator />
            )}
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    // height: 280,
    height: 200,
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

const mapStateToProps = (state) => ({
  currencies: state.Currencies.currenciesList,
  balance: state.profile.balance,
  eth_balance: state.profile.eth_balance,
  btc_balance: state.profile.eth_balance
});

export default connect(mapStateToProps)(CurrencyOptionsModal);
