import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header_Black from "../../util/Header_Black";
import { StatusBar } from "expo-status-bar";
import Header_White from "../../util/Header_White";
import { GlobalColor } from "../../util/colors";
// import MainCarousel from "../../component/MainCarousel";
const MainPage = () => {
  return (
    <>
      <Header_Black />
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={{ justifyContent: "center" }}>
            <Text style={{ fontSize: 21, justifyContent: "center" }}>
              User's{" "}
              <Text
                style={{
                  color: GlobalColor.colors.Pick_color,
                  fontWeight: "bold",
                }}
                s
              >
                Pick
              </Text>
              <Text style={{ color: "gray", fontSize: 14 }}>
                {" "}
                맞춤형 뉴스를 한눈에 체크
              </Text>
            </Text>
          </View>
          <View>
            {/* <MainCarousel /> */}
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View>
            <Text>asdf</Text>
          </View>
          <View></View>
        </View>
      </View>
      <StatusBar style="light" />
    </>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    padding: 40,
  },
});
