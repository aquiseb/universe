import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = props => {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.h1}>
        UNIVERSE
      </Text>
      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.h2}>
          MOBILE & WEB
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.p}>
          BY ASTEN MIES
        </Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center"
  },
  link: {
    color: "blue"
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16
  },
  p: {
    alignItems: "center",
    color: "#cccccc",
    fontSize: 12
  },
  h2: {
    alignItems: "center",
    color: "#808080",
    fontSize: 18
  },
  h1: {
    alignItems: "center",
    color: "#212121",
    fontSize: 42,
    marginBottom: 10
  }
});
