import * as React from "react";
import { ScrollView } from "react-native-gesture-handler";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import { SafeAreaView } from "react-native-safe-area-context";
import {SBTextItem} from "./SBTextItem"
import SButton from "./SButton";
import { ElementsText, window } from "./constants";
import { useWindowDimensions } from "react-native";
import { useSharedValue } from "react-native-reanimated";

const PAGE_WIDTH = window.width;

// Normal_Vertical 컴포넌트에서 prop 이름을 colors로 변경
function Normal_Vertical({ colors ,Newsdata }) {
    const windowWidth = useWindowDimensions().width;
    const scrollOffsetValue = useSharedValue<number>(0);
    // const [data, setData] = React.useState([Newsdata]);
    const [isVertical, setIsVertical] = React.useState(true);
    const [isFast, setIsFast] = React.useState(false);
    const [isAutoPlay, setIsAutoPlay] = React.useState(true);
    const [isPagingEnabled, setIsPagingEnabled] = React.useState(false);
    const ref = React.useRef<ICarouselInstance>(null);
  
    const baseOptions = isVertical
      ? ({
          vertical: true,
          width: windowWidth,
          height: 20,
        } as const)
      : ({
          vertical: false,
          width: windowWidth,
          height: 20,
        } as const);
  
    return (
        <Carousel
          {...baseOptions}
          loop
          enabled
          ref={ref}
          defaultScrollOffsetValue={scrollOffsetValue}
          testID={"xxx"}
          style={{ width: "100%" }}
          autoPlay={isAutoPlay}
          autoPlayInterval={isFast ? 100 : 2000}
          data={Newsdata}
          onConfigurePanGesture={(g) => g.enabled(false)}
          pagingEnabled={isPagingEnabled}
          renderItem={({ index, item }) => <SBTextItem title={item.title} colors={colors} key={index} index={index} />}
        />
    );
  }
  
  export default Normal_Vertical;
  
