// SBTextItem 컴포넌트 코드
import React from "react";
import { StyleProp, ViewStyle, Text } from "react-native";
import { StyleSheet, View } from "react-native";

interface Props {
  title?: string;
  style?: StyleProp<ViewStyle>;
  index?: number;
  colors?: string; // colors 속성을 추가
}

export const SBTextItem: React.FC<Props> = ({
  title,
  colors,
  style,
  index,
}) => {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors, borderColor: colors },
        style,
      ]}
    >
      {typeof index === "number" && (
        <Text style={{ fontSize: 15, color: "white", opacity: 1 }}>
          {title}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
