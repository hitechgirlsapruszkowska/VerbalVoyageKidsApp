import * as Font from "expo-font";
export async function customFont() {
  await Font.loadAsync({
    "pixel-regular": require("../assets/fonts/PixelifySans-Regular.ttf"),
    "pixel-medium": require("../assets/fonts/PixelifySans-Medium.ttf"),
    "pixel-bold": require("../assets/fonts/PixelifySans-Bold.ttf"),
  });
}
customFont();
