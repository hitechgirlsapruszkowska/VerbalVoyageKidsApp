import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from "react-native";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { textToSpeech } from "./googletts";

const quizData = [
  {
    id: "1",
    question: "What letter does this animal start with?",
    imageUrl: require("../assets/animals/antelope.png"),
    options: ["a", "g", "f", "z"],
    answer: "a",
  },
  {
    id: "2",
    question: "What letter does this animal start with?",
    imageUrl: require("../assets/animals/fish.png"),
    options: ["f", "c", "d", "r"],
    answer: "f",
  },
  {
    id: "3",
    question: "What letter does this vehicle start with?",
    imageUrl: require("../assets/vehicles/bike.png"),
    options: ["r", "b", "j", "m"],
    answer: "b",
  },
  {
    id: "4",
    question: "What letter does this vehicle start with?",
    imageUrl: require("../assets/vehicles/tractor.png"),
    options: ["s", "w", "a", "t"],
    answer: "t",
  },
  {
    id: "5",
    question: "What kind of shape is this?",
    imageUrl: require("../assets/shapes/triangle.png"),
    options: ["heart", "square", "circle", "triangle"],
    answer: "triangle",
  },
  {
    id: "6",
    question: "What kind of shape is this?",
    imageUrl: require("../assets/shapes/heart.png"),
    options: ["heart", "square", "circle", "triangle"],
    answer: "heart",
  },
];

const topImage = require("../assets/others/quizTop.png");
const congratulationsImage = require("../assets/others/congratulations.png");
const tryAgainImage = require("../assets/others/tryagain.png");

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const navigation = useRouter();

  const handleAnswer = (selectedAnswer: any) => {
    const correctAnswer = quizData[currentQuestion].answer;
    if (correctAnswer === selectedAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  const goToGames = () => {
    navigation.push("/games");
  };

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
            marginLeft: 9,
            width: 85,
            height: 70,
          }}
        />
      </Pressable>

      <View style={styles.itemContainer}>
        {showScore ? (
          <View style={styles.resultContainer}>
            <Image
              source={score >= 4 ? congratulationsImage : tryAgainImage}
              style={styles.congratulationsImage}
            />
            <TouchableOpacity
              onPress={score >= 4 ? goToGames : restartQuiz}
              style={styles.resultContainer}
            >
              <Text
                style={[
                  styles.resultText,
                  score >= 4 ? styles.successText : styles.failureText,
                ]}
              >
                {score >= 4
                  ? `Your score: ${score}/6! You are wonderful! Click here to learn new things!`
                  : `Your score: ${score}/6. Don't worry! Click here to try again!`}
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.questionContainer}>
            <View style={styles.headQuestion}>
              <Text style={styles.questionStyle}>
                {quizData[currentQuestion].question}
              </Text>
              <Image
                source={quizData[currentQuestion].imageUrl}
                style={styles.image}
              />
            </View>

            {quizData[currentQuestion].options.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  handleAnswer(item);
                  textToSpeech(`${item}`);
                }}
                style={styles.optionContainer}
              >
                <Text style={styles.optionStyle}>{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuizGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF8E26",
    justifyContent: "space-between",
  },
  questionContainer: {
    padding: 10,
    margin: 10,
    borderRadius: 30,
  },
  resultContainer: {
    backgroundColor: "#FFEAD7",
    padding: 10,
    margin: 10,
    borderRadius: 30,
  },
  optionStyle: {
    color: "#EA7000",
    padding: 5,
    fontFamily: "pixel-regular",
    fontSize: 40,
    marginLeft: 10,
  },
  optionContainer: {
    borderColor: "#EA7000",
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 30,
    backgroundColor: "#FFF7EF",
  },
  image: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").height * 0.2,
    resizeMode: "cover",
    borderRadius: 40,
  },
  questionStyle: {
    color: "#EA7000",
    fontFamily: "pixel-medium",
    fontSize: 32,
    textAlign: "center",
  },
  resultText: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "pixel-medium",
  },
  successText: {
    fontFamily: "pixel-medium",
    fontSize: 40,
    color: "green",
    textAlign: "center",
  },
  failureText: {
    color: "red",
    textAlign: "center",
    fontFamily: "pixel-medium",
    fontSize: 40,
  },
  itemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    margin: 20,
  },
  headQuestion: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF7EF",
    padding: 10,
    borderRadius: 30,
  },
  congratulationsImage: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.3,
    resizeMode: "contain",
    marginVertical: 20,
    // borderRadius: 100,
  },
  tryAgainImage: {
    width: Dimensions.get("window").width * 0.8,
    height: Dimensions.get("window").height * 0.3,
    resizeMode: "contain",
    marginVertical: 20,
    // borderRadius: 100,
  },
  topBottomImage: {
    width: "100%",
    height: Dimensions.get("window").height * 0.22,
    resizeMode: "cover",
    position: "absolute",
    zIndex: -1,
  },
  topImage: {
    top: 0,
  },
});
