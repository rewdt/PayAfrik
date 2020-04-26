import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView
} from "react-native";
import { connect } from "react-redux";
import lodash from "lodash";
import EmptyHistoryImage from "../../../assets/empty_history.png";
import { Button } from "react-native-paper";
import { getTransactionHistory } from "../../actions/ProfileAction";
const { width, height } = Dimensions.get("window");

const HistoryCard = ({ index, item }) => {
  return (
    <View
      style={{
        backgroundColor: "#eb2121",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width,
        height: 57,
        paddingRight: 25,
        paddingLeft: 35,
        marginTop: index === 0 ? 30 : 0,
        marginBottom: 5
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{
            uri: "https://s2.coinmarketcap.com/static/img/coins/200x200/1.png"
          }}
          style={{ height: 30, width: 30 }}
        />
        <View style={{ paddingLeft: 5 }}>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 15,
              color: "#262626"
            }}
          >
            {item.requested_amount} BTC
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Medium",
              fontSize: 8,
              color: "#ffffff"
            }}
          >
            123
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 13,
            color: "#ffffff"
          }}
        >
          Account Credited
        </Text>
      </View>
    </View>
  );
};

const TransactionHistory = (props) => {
  useEffect(() => {
    props.getTransactionHistory(props.user.token);
  }, []);
  const EmptyHistory = () => {
    return (
      <View style={styles.emptyContainer}>
        <View style={{ alignSelf: "center", marginTop: 50 }}>
          <Image
            source={EmptyHistoryImage}
            style={styles.emptyImg}
            resizeMode="stretch"
          />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text style={styles.emptyInfoText}>
            You don't have any transactions yet...
          </Text>
          <Button mode="contained">Top-up Wallet</Button>
        </View>
      </View>
    );
  };
  const TransactionView = () => {
    return (
      <ScrollView>
        {props.transaction_history.map((item, index) => (
          <HistoryCard index={index} item={item} key={item.id} />
        ))}
      </ScrollView>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {lodash.isEmpty(props.transaction_history)
        ? EmptyHistory()
        : TransactionView()}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyImg: {
    height: 250,
    width: width - 50
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "flex-start"
    // alignSelf: "center"
  },
  emptyInfoText: {
    marginVertical: 30,
    textAlign: "center",
    color: "#262626",
    fontSize: 13,
    fontFamily: "Poppins-SemiBold"
  }
});

const mapStateToProps = (state) => ({
  user: state.AuthReducer.authDetails,
  transaction_history: state.profile.transaction_history
});

export default connect(mapStateToProps, { getTransactionHistory })(
  TransactionHistory
);
