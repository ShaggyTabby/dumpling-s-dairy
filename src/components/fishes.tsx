import { FC } from "react";
import useStore from "@/store";
import { incrementFishes, resetFishes } from "@/store/slices/fishSlice";

export const Fishes: FC = () => {
  const fishes = useStore((state) => state.fishes);

  return (
    <>
      <h5>小鱼干的数量{fishes}</h5>
      <button onClick={incrementFishes}>更多小鱼干</button>
      <button onClick={resetFishes}>重置小鱼干</button>
    </>
  );
};
