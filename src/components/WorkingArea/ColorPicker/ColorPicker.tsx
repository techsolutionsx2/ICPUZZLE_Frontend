import { FC, useState } from "react";
import { HuePicker } from "react-color";

interface Props {
  handleChangeColor: (color: string) => void;
}

import { AiOutlineDown } from "react-icons/ai";

import {
  Layout,
  IconLayout,
  Excode,
  ColorSelecter,
} from "./ColorPicker.styled";

const ColorPicker: FC<Props> = ({ handleChangeColor }) => {
  const [show, setShow] = useState(true);

  return (
    <Layout flag={show}>
      <IconLayout flag={show} onClick={() => setShow(!show)}>
        <AiOutlineDown size={15} color="white" />
      </IconLayout>
      {show && (
        <>
          <Excode>EXCODE</Excode>
          <ColorSelecter bgColor="black" />
          <ColorSelecter bgColor="white" />
          <HuePicker
            color="#FFF"
            onChange={({ hex }) => handleChangeColor(hex)}
            width="100%"
          />
        </>
      )}
    </Layout>
  );
};

export default ColorPicker;
