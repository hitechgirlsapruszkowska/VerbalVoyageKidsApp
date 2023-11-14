import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Image,
  FlatList,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { colors } from "./constants/object";
import { textToSpeech } from "./googletts";
import { customFont } from "./fonts";

type Colors = {
  id: string;
  imageUrl: any;
  title: string;
};

const topImage = require("../assets/others/colorsTop.png");

const colorsGame: React.FC = () => {
  useEffect(() => {
    customFont();
  }, []);
  const navigation = useRouter();
  const numColumns = 2;
  const windowWidth = Dimensions.get("window").width;
  const imageSize = windowWidth / numColumns;

  const renderItem = ({ item }: { item: Colors }) => (
    <View
      style={[styles.itemContainer, { width: imageSize, height: imageSize }]}
    >
      <TouchableOpacity onPress={() => textToSpeech(`${item.title}`)}>
        <Image source={item.imageUrl} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: null as any,
        }}
      />
      <Image
        source={topImage}
        style={[styles.topBottomImage, styles.topImage]}
      />
      <Pressable
        onPress={() => {
          navigation.push("/games");
        }}
      >
        <Image
          source={require("../assets/others/arrow3.png")}
          style={{
            marginLeft: 5,
            width: 85,
            height: 70,
          }}
        />
      </Pressable>
      <View style={styles.textContainer}>
        <Text
          style={{ color: "white", fontSize: 65, fontFamily: "pixel-medium" }}
        >
          Colors
        </Text>
        <Text
          style={{ color: "white", fontSize: 20, fontFamily: "pixel-medium" }}
        >
          Click color to play sound!
        </Text>
      </View>

      <FlatList
        data={colors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      />
    </SafeAreaView>
  );
};

export default colorsGame;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    margin: 20,
  },
  image: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").height * 0.2,
    resizeMode: "cover",
    borderRadius: 30,
  },
  title: {
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontFamily: "pixel-regular",
  },
  container: {
    flex: 1,
    backgroundColor: "#FF8E26",
    justifyContent: "space-between",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  topBottomImage: {
    width: "100%",
    height: Dimensions.get("window").height * 0.25,
    resizeMode: "cover",
    position: "absolute",
    zIndex: -1,
  },
  topImage: {
    top: 0,
  },
});
