import React, { useEffect } from "react";
import {
  SafeAreaView,
  Image,
  View,
  Text,
  Pressable,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import { customFont } from "./fonts";

const topDecor = require("../assets/others/decor1.png");
const bottomDecor = require("../assets/others/decor2.png");
const { width, height } = Dimensions.get("window");

export default function Home() {
  const navigation = useRouter();
  const imageSize = width * 0.6;

  useEffect(() => {
    customFont();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerTransparent: true, headerTitle: "" }} />
      <Image
        source={topDecor}
        style={[styles.topBottomImage, styles.topImage]}
      />

      {/* logo */}
      <View style={styles.centeredContainer}>
        <View style={styles.imageLogoContainer}>
          <Image
            source={require("../assets/logo/logo2.png")}
            style={[styles.imageLogo, { width: imageSize, height: imageSize }]}
          />
        </View>
        <View style={styles.sloganContainer}>
          <Text style={styles.slogan}>Quiz, Play, Learn – Every Day!</Text>
        </View>
      </View>

      {/* button */}
      <View style={styles.buttonContainer}>
        <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1.0 }]}>
          <View style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => navigation.push("/games")}
            >
              Click here to start!
            </Text>
          </View>
        </Pressable>
      </View>

      <Image
        source={bottomDecor}
        style={[styles.topBottomImage, styles.bottomImage]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 300,
    backgroundColor: "#FEA14A",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontFamily: "pixel-bold",
    color: "white",
    fontSize: 25,
    letterSpacing: 4,
    textAlign: "center",
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 140,
  },
  topBottomImage: {
    width: "100%",
    height: Dimensions.get("window").height * 0.45,
    resizeMode: "cover",
    position: "absolute",
    zIndex: -1,
  },
  topImage: {
    top: 0,
  },
  bottomImage: {
    bottom: 0,
  },
  container: {
    flex: 1,
    backgroundColor: "#FEA14A",
    justifyContent: "center",
    alignItems: "center",
  },
  centeredContainer: {
    position: "absolute",
    top: "10%",

    alignItems: "center",
  },
  imageLogoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imageLogo: {
    resizeMode: "contain",
  },
  sloganContainer: {
    alignItems: "center",
    marginTop: "11%",
  },
  slogan: {
    fontFamily: "pixel-bold",
    color: "white",
    fontSize: 35,
    letterSpacing: 4,
    textAlign: "center",
  },
});
