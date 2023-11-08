import { StyleSheet, useWindowDimensions } from "react-native";

export const useResponsiveStyles = () => {
  const { height, width, scale, fontScale } = useWindowDimensions();

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

  return styles;
};
