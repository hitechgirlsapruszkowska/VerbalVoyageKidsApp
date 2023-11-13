import React, { useEffect } from "react";
import {
  SafeAreaView,
  Image,
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { useResponsiveStyles } from "../components/main/indexstyles";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";

const customFont = () => {
  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        "font-light": require("../assets/fonts/ChakraPetch-Light.ttf"),
        "font-medium": require("../assets/fonts/ChakraPetch-Medium.ttf"),
        "font-semibold": require("../assets/fonts/ChakraPetch-SemiBold.ttf"),
      });
    }
    loadFont();
  }, []);
};
const Home = () => {
  const styles = useResponsiveStyles();
  const navigation = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* logo */}
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/logo/logo.png")}
          style={styles.image}
        />
      </View>

      {/* button */}
      <View style={styles.buttonContainer}>
        <Pressable style={styles.buttonStyle}>
          <Text
            style={styles.buttonText}
            onPress={() => navigation.push("/games")}
          >
            Start learning
          </Text>
          <Text styles={{ font: "" }}>ssssf</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EA7000",
  },
  imageContainer: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  button: {
    width: 200,
    backgroundColor: "#FF7A00",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
  image: {
    marginTop: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 100,
  },
});
