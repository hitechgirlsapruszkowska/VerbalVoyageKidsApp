import * as Font from "expo-font";
export async function customFont() {
  await Font.loadAsync({
    "font-light": require("../assets/fonts/ChakraPetch-Light.ttf"),
    "font-regular": require("../assets/fonts/ChakraPetch-Regular.ttf"),
    "font-medium": require("../assets/fonts/ChakraPetch-Medium.ttf"),
    "font-bold": require("../assets/fonts/ChakraPetch-SemiBold.ttf"),

    "pixel-regular": require("../assets/fonts/PixelifySans-Regular.ttf"),
    "pixel-medium": require("../assets/fonts/PixelifySans-Medium.ttf"),
    "pixel-bold": require("../assets/fonts/PixelifySans-Bold.ttf"),

    // "tektur-bold": require("../assets/fonts/Tektur_Condensed-SemiBold.ttf"),

    "unbound-bold": require("../assets/fonts/Unbounded-SemiBold.ttf"),
  });
}
customFont();
