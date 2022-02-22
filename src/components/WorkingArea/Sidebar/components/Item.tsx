import Image from "next/image";
import { FC } from "react";
import { useDrag } from "react-dnd";

//styled components
import { Layout } from "./Item.styled";

interface Props {
  data: {
    id: string;
    img: string;
  };
  handleDrag: (data: any, i: any) => void;
}

const Item: FC<Props> = ({ data, handleDrag }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "puzzle",
      item: { id: data.id },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (_item, monitor) => {
        const offset = monitor.getClientOffset();
        handleDrag(offset, data);
      },
    }),
    [data.id]
  );

  return (
    <Layout ref={drag} style={{ cursor: isDragging ? "grabbing" : "grab" }}>
      <Image src={data.img} alt="Puzzle" width={50} height={50} />
    </Layout>
  );
};

export default Item;
