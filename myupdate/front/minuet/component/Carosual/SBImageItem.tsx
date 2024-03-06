import React from "react";
import type { StyleProp, ViewStyle, ImageSourcePropType } from "react-native";
import { StyleSheet, View, ActivityIndicator, Text } from "react-native";
import { Image } from "expo-image";

interface Props {
  style?: StyleProp<ViewStyle>;
  index?: number;
  showIndex?: boolean;
  img?: ImageSourcePropType;
  title?: String;
  img_url?: String;
}

export const SBImageItem: React.FC<Props> = ({
  style,
  index: _index,
  showIndex = true,
  img_url,
  title,
}) => {
  const index = _index ?? 0;

  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="small" />
      <Image
        cachePolicy={"memory-disk"}
        key={index}
        style={styles.image}
        source={{ uri: img_url }}
      />
      <Text
        style={{
          color: "white",
          fontSize: 15,
          fontWeight:"bold",
          backgroundColor: "#000000",
          width: "100%",
          paddingHorizontal:20,
          height: 60,
        }}
      >
        {title}
      </Text>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    height: "100%",
  },
});
