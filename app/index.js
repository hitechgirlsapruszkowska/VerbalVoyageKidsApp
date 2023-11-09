import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";
import { Stack, useRouter } from "expo-router";
import AppLoading from "expo-app-loading";

import { CustomText, BolderText } from "../constants/text";
import { Button } from "react-native";
import { useResponsiveStyles } from "../components/main/indexstyles";

import games from "./games/games";

export default function Home() {
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
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
