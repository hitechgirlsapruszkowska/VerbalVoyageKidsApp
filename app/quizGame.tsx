import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

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
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.questionContainer}>
          <TouchableOpacity
            onPress={score >= 3 ? goToGames : restartQuiz}
            style={styles.resultContainer}
          >
            <Text
              style={[
                styles.resultText,
                score >= 3 ? styles.successText : styles.failureText,
              ]}
            >
              {score >= 3
                ? `Your score: ${score}! Wow, you are wonderful! It is time to learn new things!`
                : `Your score: ${score}. Don't worry and try again!`}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.questionContainer}>
          <Text style={styles.questionStyle}>
            {quizData[currentQuestion].question}
          </Text>
          <Image
            source={quizData[currentQuestion].imageUrl}
            style={styles.image}
          />
          {quizData[currentQuestion].options.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleAnswer(item)}
              style={styles.optionContainer}
            >
              <Text style={styles.optionStyle}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default QuizGame;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF8E26",
    alignItems: "center",
    justifyContent: "center",
  },
  questionContainer: {
    backgroundColor: "#F07300",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    color: "white",
  },
  optionStyle: {
    color: "white",
    padding: 5,
  },
  optionContainer: {
    borderColor: "white",
    borderWidth: 2,
    marginTop: 10,
  },
  image: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").height * 0.2,
    resizeMode: "cover",
    borderRadius: 10,
  },
  questionStyle: {
    color: "white",
  },
  resultContainer: {
    padding: 10,
    alignItems: "center",
  },
  resultText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  successText: {
    color: "green",
  },
  failureText: {
    color: "red",
  },
});
