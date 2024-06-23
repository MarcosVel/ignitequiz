import { BlurMask, Canvas, Rect } from "@shopify/react-native-skia";
import React from "react";
import { useWindowDimensions } from "react-native";
import Animated from "react-native-reanimated";
import { THEME } from "../../styles/theme";

const STATUS = [
  "transparent",
  THEME.COLORS.BRAND_LIGHT,
  THEME.COLORS.DANGER_LIGHT,
];

type Props = {
  status: number;
};

export default function OverlayFeedback({ status }: Props) {
  const { height, width } = useWindowDimensions();
  const color = STATUS[status];

  return (
    <Animated.View style={{ height, width, position: "absolute" }}>
      <Canvas style={{ flex: 1 }}>
        <Rect x={0} y={0} width={width} height={height} color={color}>
          <BlurMask blur={50} />
        </Rect>
      </Canvas>
    </Animated.View>
  );
}