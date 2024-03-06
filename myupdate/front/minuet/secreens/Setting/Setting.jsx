import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import Header_Black from "../../util/Header_Black";
import Header_White from "../../util/Header_White";
import MySetting from "./MySetting";
import IoTSetting from "./IoTSetting";

const Setting = () => {
  const [selectTag, setSelectTag] = useState(0);
  const [isSelectedTag, setIsSelectedTag] = useState(0);

  return (
    <View style={styles.container}>
      <Header_Black />
      <View style={styles.tag}>
        <TouchableOpacity
          style={selectTag ? styles.noneTag : styles.selectedTag}
          onPress={() => setSelectTag(0)}
        >
          <Text style={styles.tagText}>내 정보</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selectTag ? styles.selectedTag : styles.noneTag}
          onPress={() => setSelectTag(1)}
        >
          <Text style={styles.tagText}>Opera</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        {selectTag ? <IoTSetting /> : <MySetting />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "tomato",
  },
  tag: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  selectedTag: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  noneTag: {
    flex: 1,
    height: "100%", 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    borderRadius: 5,
    borderWidth: 1,
  },
  tagText: {
    fontSize: 24,
  },
  main: {
    flex: 11
  }
});

export default Setting;
