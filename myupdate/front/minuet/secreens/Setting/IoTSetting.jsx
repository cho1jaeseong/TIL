import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";

const IoTSetting = ({ navigation }) => {
  const [isConnected, setIsConnected] = useState(true);

  return (
    <View style={styles.container}>
      {isConnected ? (
        <>
          <View style={[styles.iotInfo, { flexDirection: "row" }]}>
            <View style={styles.iotInfoLeft}>
              <Image
                style={styles.iotInfoImg}
                source={require("../../assets/opera_on.png")}
                resizeMode="contain"
              />
              <TouchableOpacity
                style={styles.iotInfoModify}
                onPress={() => setIsConnected(false)}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  임시 버튼(off)
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.iotInfoRight}>
              <Text style={{ fontSize: 28 }}>Opera 정보</Text>
              <View style={styles.iotInfoLocation}>
                <Image
                  style={{ width: 20, height: 20 }}
                  source={require("../../assets/gps.png")}
                  resizeMode="contain"
                />
                <Text style={{}}>부산광역시 강서구 녹산동</Text>
              </View>
              <Text>브리핑할 알람 : n개</Text>
            </View>
          </View>
          <View style={styles.iotBriefing}>
            <Text>아직 브리핑할 알람이 없어요...</Text>
          </View>
        </>
      ) : (
        <View style={styles.iotDisconneced}>
          <Image
            style={styles.iotInfoImg}
            source={require("../../assets/opera_off.png")}
            resizeMode="contain"
          />
          <Text>연결된 Opera가 없습니다</Text>
          <Text>블루투스를 확인해주세요</Text>
          <TouchableOpacity
            style={{
              backgroundColor: "skyblue",
              borderRadius: 5,
              margin: 5,
              padding: 5,
            }}
            onPress={() => setIsConnected(true)}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              임시 버튼(on)
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 48,
  },
  iotDisconneced: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    flex: 2,
    // height: 150,
    // margin: 10,
    // backgroundColor: "orange",
  },
  iotInfo: {
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flex: 2,
    // height: 150,
    // margin: 10,
    // backgroundColor: "orange",
  },
  iotInfoLeft: {
    width: "25%",
    height: "100%",
    marginHorizontal: "5%",
  },
  iotInfoImg: {
    width: "100%",
    height: "70%",
  },
  iotInfoModify: {
    width: "100%",
    height: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
    borderRadius: 5,
  },
  iotInfoRight: {
    width: "60%",
  },
  iotInfoLocation: {
    flexDirection: "row",
    alignItems: "center",
  },
  iotBriefing: {
    flexDirection: "row",
    width: "100%",
    // height: 150,
    flex: 5,
    backgroundColor: "teal",
  },
});

export default IoTSetting;
