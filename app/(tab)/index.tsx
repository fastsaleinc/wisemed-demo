import React from "react";
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "aliceblue",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 25 }}>WiseMed Demo</Text>
    </View>
  );
};

export default Home;
