import * as React from "react";
import { Text, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import { fruitItems } from "./utils/items";

import { ElementsText, window } from "./constants";
import { withAnchorPoint } from "./anchor-point";
// import { fruitItems } from "./items";

const PAGE_WIDTH = window.width;
const PAGE_HEIGHT = window.width * 2;

function CardCaro({ data, setModal }) {
  const [isAutoPlay, setIsAutoPlay] = React.useState(false);

  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
  } as const;

  return (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Carousel
          {...baseOptions}
          loop
          autoPlay={isAutoPlay}
          withAnimation={{
            type: "spring",
            config: {
              damping: 13,
            },
          }}
          autoPlayInterval={1500}
          data={data}
          renderItem={({ item, index, animationValue }) => (
            <Card
              animationValue={animationValue}
              uri={item.img_url}
              title={item.title}
              key={index}
              index={index}
            />
          )}
        />
      </View>
    </>
  );
}

const Card: React.FC<{
  uri: string;
  title: string;
  index: number;
  animationValue: Animated.SharedValue<number>;
}> = ({ title, index, animationValue, uri }) => {
  const WIDTH = PAGE_WIDTH / 1.2;
  const HEIGHT = PAGE_HEIGHT / 1.7;

  const cardStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      [-0.1, 0, 1],
      [0.95, 1, 1],
      Extrapolate.CLAMP
    );

    const translateX = interpolate(
      animationValue.value,
      [-1, -0.2, 0, 1],
      [0, WIDTH * 0.3, 0, 0]
    );

    const transform = {
      transform: [
        { scale },
        { translateX },
        { perspective: 200 },
        {
          rotateY: `${interpolate(
            animationValue.value,
            [-1, 0, 0.4, 1],
            [30, 0, -25, -25],
            Extrapolate.CLAMP
          )}deg`,
        },
      ],
    };

    return {
      ...withAnchorPoint(
        transform,
        { x: 0.5, y: 0.5 },
        { width: WIDTH, height: HEIGHT }
      ),
    };
  }, [index]);

  const blockStyle = useAnimatedStyle(() => {
    const translateX = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [-30, 0, 30] // 조절 필요한 값
    );

    const translateY = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [-20, 0, -20] // 조절 필요한 값
    );

    const rotateZ = interpolate(animationValue.value, [-1, 0, 1], [0, 0, -25]);

    return {
      transform: [{ translateX }, { translateY }, { rotateZ: `${rotateZ}deg` }],
    };
  }, [index]);

  return (
    <Animated.View
      style={{
        marginTop:100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Animated.View
        style={[
          {
            backgroundColor: "white",
            alignSelf: "center",
            justifyContent: "flex-start",
            alignItems: "center",

            paddingHorizontal: 20,
            width: WIDTH,
            height: HEIGHT,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 8,
            },
            shadowOpacity: 0.44,
            shadowRadius: 10.32,

            elevation: 16,
          },
          cardStyle,
        ]}
      >
        <Animated.Image
          source={{ uri: uri }}
          style={[
            {
              flex: 1,
              width: WIDTH * 1,
              height: WIDTH,
            },
            blockStyle,
          ]}
          resizeMode={"stretch"}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ color: "black", fontWeight: "bold" }}>{title}</Text>
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default CardCaro;
