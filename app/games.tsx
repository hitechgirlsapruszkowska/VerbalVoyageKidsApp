import React from "react";
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { games } from "./constants/object";
import { useRouter } from "expo-router";

type Game = {
  id: string;
  imageUrl: any;
  title: string;
  route: string;
};

const topImage = require("../assets/others/TopBricks.png");
const bottomImage = require("../assets/others/BottomBricks.png");

export const GameGrid: React.FC = () => {
  const navigation = useRouter();
  const numColumns = 2;
  const windowWidth = Dimensions.get("window").width;
  const imageSize = windowWidth / numColumns;

  const renderItem = ({ item }: { item: Game }) => (
    <View
      style={[styles.itemContainer, { width: imageSize, height: imageSize }]}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.push(`/${item.route}`);
        }}
      >
        <Image source={item.imageUrl} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Image source={topImage} style={styles.topBottomImage} />

      <View style={styles.textContainer}>
        <Text style={{ color: "white", fontSize: 30 }}>Ready to learn?</Text>
        <Text style={{ color: "white", fontSize: 15 }}>
          Pick game to start!
        </Text>
      </View>

      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
      />
      <Image source={bottomImage} style={styles.topBottomImage} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").height * 0.2,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    textAlign: "center",
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#FF8E26",
    justifyContent: "space-between",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  topBottomImage: {
    width: "100%",
    height: Dimensions.get("window").height * 0.1,
    resizeMode: "cover",
  },
});

export default GameGrid;
