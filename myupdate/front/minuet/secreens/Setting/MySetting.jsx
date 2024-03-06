import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const MySetting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.myInfo}>
        <View style={styles.myInfoLeft}>
          <Image
            style={styles.myInfoImg}
            source={require("../../assets/profile.png")}
            resizeMode="contain"
          />
          <TouchableOpacity style={styles.myInfoModify}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              회원정보 수정
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.myInfoRight}>
          <Text style={{ fontSize: 28 }}>닉네임최대8글자로</Text>
          <View style={styles.myInfoLocation}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../assets/gps.png")}
              resizeMode="contain"
            />
            <Text style={{}}>부산광역시 강서구 녹산동</Text>
          </View>
          <View style={styles.myInfoCategory}>
            <Text style={{ backgroundColor: "red" }}>관심 카테고리1</Text>
            <Text style={{ backgroundColor: "skyblue" }}>관심 카테고리2</Text>
            <Text style={{ backgroundColor: "yellowgreen" }}>
              관심 카테고리3
            </Text>
          </View>
          <Text>스크랩한 기사 : n개</Text>
        </View>
      </View>
      <View style={styles.myScrap}>
        <Text>아직 스크랩한 기사가 없어요...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "teal",
  },
  main: {
    flex: 6,
  },
  title: {
    marginTop: 10,
    fontSize: 48,
  },
  myInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flex: 2,
    // height: 150,
    // margin: 10,
    // backgroundColor: "orange",
  },
  myInfoLeft: {
    width: "25%",
    height: "100%",
    marginHorizontal: "5%",
  },
  myInfoImg: {
    width: "100%",
    height: "70%",
  },
  myInfoModify: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
    borderRadius: 5,
  },
  myInfoRight: {
    width: "60%",
  },
  myInfoLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  myInfoCategory: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  myScrap: {
    flexDirection: "row",
    width: "100%",
    // height: 150,
    flex: 5,
    backgroundColor: "teal",
  },
});

export default MySetting;
