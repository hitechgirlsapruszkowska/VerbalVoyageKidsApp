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
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { animals } from "./constants/object";

const navigation = useRouter();

type Animals = {
  id: string;
  imageUrl: any;
  title: string;
};

const topImage = require("../assets/others/TopBricks.png");
const bottomImage = require("../assets/others/BottomBricks.png");

const alphabetGame: React.FC = () => {
  const numColumns = 2;
  const windowWidth = Dimensions.get("window").width;
  const imageSize = windowWidth / numColumns;

  const renderItem = ({ item }: { item: Animals }) => (
    <View
      style={[styles.itemContainer, { width: imageSize, height: imageSize }]}
    >
      <TouchableOpacity>
        <Image source={item.imageUrl} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Image source={topImage} style={styles.topBottomImage} />
      <Pressable
        onPress={() => {
          navigation.push("/games");
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 25,
            textAlign: "left",
            marginLeft: 15,
          }}
        >
          ⋘
        </Text>
      </Pressable>
      <View style={styles.textContainer}>
        <Text style={{ color: "white", fontSize: 40 }}>Animals</Text>
        <Text style={{ color: "white", fontSize: 20 }}>
          Click to play sound!
        </Text>
      </View>

      <FlatList
        data={animals}
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

export default alphabetGame;

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
