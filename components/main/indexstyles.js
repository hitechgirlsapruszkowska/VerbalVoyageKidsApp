import { StyleSheet, useWindowDimensions } from "react-native";
import {
  useFonts,
  LexendExa_100Thin,
  LexendExa_200ExtraLight,
  LexendExa_300Light,
  LexendExa_400Regular,
  LexendExa_500Medium,
  LexendExa_600SemiBold,
  LexendExa_700Bold,
  LexendExa_800ExtraBold,
  LexendExa_900Black,
} from "@expo-google-fonts/lexend-exa";
export const useResponsiveStyles = () => {
  const { height, width, scale, fontScale } = useWindowDimensions();
  let [fontsLoaded] = useFonts({
    LexendExa_100Thin,
    LexendExa_200ExtraLight,
    LexendExa_300Light,
    LexendExa_400Regular,
    LexendExa_500Medium,
    LexendExa_600SemiBold,
    LexendExa_700Bold,
    LexendExa_800ExtraBold,
    LexendExa_900Black,
  });

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
    buttonStyle: {
      width: 200,
      backgroundColor: "#FF7A00",
      padding: 15,
      borderRadius: 5,
      alignItems: "center",
      shadowColor: "#000",
      marginBottom: 10,
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontFamily: "LexendExa_500Medium",
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

  return styles;
};
