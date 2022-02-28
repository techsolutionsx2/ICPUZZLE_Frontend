import { ColorInput, Layout } from "./ColorSlider.styled";
import rgbHex from "rgb-hex";
import { useEffect, useRef } from "react";

let list = [
  [
    { offset: 0, color: "#fedf1a" },
    { offset: 0.15, color: "#fba658" },
    { offset: 0.23, color: "#f6789c" },
    { offset: 0.39, color: "#9c88db" },
    { offset: 0.56, color: "#5caee4" },
    { offset: 0.65, color: "#19d2e3" },
    { offset: 0.75, color: "#18ddd4" },
    { offset: 0.84, color: "#2de4ba" },
    { offset: 0.95, color: "#62fc6c" },
    { offset: 1, color: "#62fc6c" },
  ],
  [
    { offset: 0, color: "#ff00d9" },
    { offset: 1, color: "#fbff00" },
  ],
  [
    { offset: 0, color: "#00aeff" },
    { offset: 0.09, color: "#00b1f6" },
    { offset: 0.23, color: "#00b9de" },
    { offset: 0.41, color: "#00c6b6" },
    { offset: 0.62, color: "#00d87e" },
    { offset: 0.85, color: "#00ef39" },
    { offset: 1, color: "#00ff08" },
  ],
  [
    { offset: 0, color: "#ff0008" },
    { offset: 0.09, color: "#ff000f" },
    { offset: 0.22, color: "#fe0023" },
    { offset: 0.38, color: "#fd0043" },
    { offset: 0.56, color: "#fc0070" },
    { offset: 0.75, color: "#fa00aa" },
    { offset: 0.96, color: "#f800ef" },
    { offset: 1, color: "#f700ff" },
  ],
  [
    { offset: 0, color: "#0e2be8" },
    { offset: 0.4, color: "#513fa5" },
    { offset: 1, color: "#e86c0e" },
  ],
  [
    { offset: 0, color: "#0030f0" },
    { offset: 1, color: "#f01" },
  ],
  [
    { offset: 0, color: "#030100" },
    { offset: 1, color: "#d613ac" },
  ],
  [
    { offset: 0, color: "#030100" },
    { offset: 1, color: "#119ff7" },
  ],
  [
    { offset: 0, color: "#030100" },
    { offset: 0.08, color: "#252400" },
    { offset: 0.22, color: "#5e5b00" },
    { offset: 0.36, color: "#8f8b00" },
    { offset: 0.5, color: "#b7b200" },
    { offset: 0.63, color: "#d7d000" },
    { offset: 0.76, color: "#ede600" },
    { offset: 0.89, color: "#faf300" },
    { offset: 1, color: "#fff700" },
  ],
  [
    { offset: 0, color: "#030100" },
    { offset: 0.12, color: "#120101" },
    { offset: 0.37, color: "#420303" },
    { offset: 0.72, color: "#8f0505" },
    { offset: 1, color: "#d10808" },
  ],
  [
    { offset: 0, color: "#030100" },
    { offset: 0.13, color: "#071306" },
    { offset: 0.4, color: "#174516" },
    { offset: 0.77, color: "#339430" },
    { offset: 1, color: "#44c740" },
  ],
];

const ColorSlider: React.FC<{
  index: number;
  setHexColor: (hex: string) => void;
  active: boolean;
}> = ({ index, setHexColor, active }) => {
  var hexToRgb = require("hex-to-rgb");
  let sliderWidth = 450;
  const getColor = (value: number) => {
    let colorRange: any[] = [];
    for (let i: number = 0; i < list[index].length; i++) {
      if (list[index][i].offset * 100 >= value) {
        colorRange = [list[index][i - 1], list[index][i]];
        break;
      }
    }

    let firstColor: string = colorRange[0].color;
    let secondColor: string = colorRange[1].color;
    let firstColor_x: number = sliderWidth * colorRange[0].offset;
    let secondColor_x: number =
      sliderWidth * colorRange[1].offset - firstColor_x;
    let slider_x: number = sliderWidth * (value / 100) - firstColor_x;
    let ratio: number = slider_x / secondColor_x;

    let result: number[] = pickHex(
      hexToRgb(secondColor),
      hexToRgb(firstColor),
      ratio
    );
    setHexColor("#" + rgbHex(result[0], result[1], result[2]).toString());
  };

  const pickHex = (color1: number[], color2: number[], weight: number) => {
    var p = weight;
    var w = p * 2 - 1;
    var w1 = (w / 1 + 1) / 2;
    var w2 = 1 - w1;
    var rgb = [
      Math.round(color1[0] * w1 + color2[0] * w2),
      Math.round(color1[1] * w1 + color2[1] * w2),
      Math.round(color1[2] * w1 + color2[2] * w2),
    ];
    return rgb;
  };
  const colorInput = useRef<any | null>(null);
  useEffect(() => {
    colorInput.current.value = 0;
  }, [index, active]);

  return (
    <Layout data={list[index]} active={active}>
      <ColorInput
        ref={colorInput}
        min={1}
        max={99}
        defaultValue={0}
        type="range"
        className="colorSlider"
        onChange={(e) => {
          getColor(+e.target.value);
        }}
        disabled={!active}
      />
    </Layout>
  );
};

export default ColorSlider;
