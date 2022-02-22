import { FC, useState, useEffect } from "react";
import { HuePicker } from "react-color";

interface Props {
  show: boolean;
  setShow: (show: boolean) => void;
  flag: boolean;
  active: number;
  handleChangeColor: (color: string) => void;
}

import { AiOutlineUp } from "react-icons/ai";

import {
  Layout,
  IconLayout,
  HexcodeContainer,
  Hexcode,
  ColorSelecter,
} from "./ColorPicker.styled";

const ColorPicker: FC<Props> = ({
  handleChangeColor,
  active,
  flag,
  show,
  setShow,
}) => {
  const [hexColor, setHexColor] = useState("#FFFFFF");

  const handleChangeInput = (e: any) => {
    setHexColor(e.target.value);
    handleChangeColor(hexColor);
  };

  useEffect(() => {
    if (active) {
      handleChangeColor(hexColor);
    }
  }, [hexColor]);

  return (
    <Layout flag={show}>
      <IconLayout flag={show} onClick={() => setShow(!show)}>
        <AiOutlineUp size={15} color={flag ? "white" : "black"} />
      </IconLayout>

      {show && (
        <>
          <HexcodeContainer flag={flag}>
            <Hexcode
              disabled={active === 0}
              flag={flag}
              placeholder={"HEXCODE"}
              onChange={(e: any) => handleChangeInput(e)}
            />
          </HexcodeContainer>
          <ColorSelecter
            bgColor="black"
            onClick={() => {
              setHexColor("#000000");
            }}
          />
          <ColorSelecter
            bgColor="white"
            onClick={() => {
              setHexColor("#FFFFFF");
            }}
          />
          <HuePicker
            color={hexColor}
            onChange={({ hex }) => {
              setHexColor(hex);
            }}
            width="100%"
          />
        </>
      )}
    </Layout>
  );
};

export default ColorPicker;
