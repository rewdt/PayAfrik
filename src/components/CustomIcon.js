import React from "react";
import { View, Text } from "react-native";
import { createIconSetFromFontello } from "@expo/vector-icons";
import fontelloConfig from "../../utils/config.json";
const Icon = createIconSetFromFontello(fontelloConfig);

const CustomIcon = props => {
  return <Icon {...props} />;
};

export default CustomIcon;
