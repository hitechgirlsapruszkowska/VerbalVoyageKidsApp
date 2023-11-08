import React from "react";
import { Text, StyleSheet } from "react-native";

export const CustomText = (props) => {
  return (
    <Text style={[regular.defaultStyle, props.style]}>{props.children}</Text>
  );
};

const regular = StyleSheet.create({
  defaultStyle: {
    fontFamily: "LexendExa_400Regular",
  },
});

export const BolderText = (props) => {
  return (
    <Text style={[bolder.defaultStyle, props.style]}>{props.children}</Text>
  );
};

const bolder = StyleSheet.create({
  defaultStyle: {
    fontFamily: "LexendExa_500Medium",
  },
});
