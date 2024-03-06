import React, { useState, useEffect } from "react";
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { GlobalColor } from "./colors";

const Header_White_Left = ({ handleState, text }) => {
  const [animatedValue] = useState(new Animated.Value(0));

  useEffect(() => {
    // 탭 색이 변할 때마다 페이드 애니메이션 적용
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false, // 네이티브 드라이버 사용 여부
    }).start();
  }, [text]);

  const getBottomColor = (tab) => {
    if (tab === "News") return GlobalColor.colors.primary_red100;
    if (tab === "Sport") return GlobalColor.colors.primary_yellow;
    if (tab === "Earth") return GlobalColor.colors.primary_green;
    if (tab === "WorkLife") return GlobalColor.colors.primary_blue;
    if (tab === "Travel") return GlobalColor.colors.primary_purple;
    return "transparent";
  };
  const bottomColor = getBottomColor(text);
  const handlePress = (value) => {
    handleState(value);
  };

  const fadeIn = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerbox}>
        <Image
          source={require("../assets/Logo_black.png")}
          style={styles.headerImage}
        />
        <View style={{ flexDirection: "row", gap: 15 }}>
          {tabs.map((tab) => (
            <Pressable key={tab} onPress={() => handlePress(tab)}>
              <Animated.View
                style={[
                  styles.tabItem,
                  text === tab && {
                    borderBottomColor: bottomColor,
                    opacity: fadeIn, // 투명도 설정
                  },
                ]}
              >
                <Text
                  style={[
                    styles.tabText,
                    text === tab && styles.selectedTabText,
                  ]}
                >
                  {tab}
                </Text>
              </Animated.View>
            </Pressable>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header_White_Left;

const tabs = ["News", "Sport", "Earth", "WorkLife", "Travel"];

const styles = StyleSheet.create({
  safeArea: { flex: 0, backgroundColor: "white", justifyContent: "center" },
  headerbox: {
    height: 80,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 5,
  },
  headerImage: {
    margin: 0,
    height: 30,
    resizeMode: "stretch",
    width: "20%",
  },
  tabItem: {
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabText: {
    fontSize: 15,
  },
  selectedTabText: {
    fontWeight: "bold",
  },
});
