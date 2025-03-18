import { FC } from "react";
import useStore from "@/store";

export const Fishes: FC = () => {
  const fishes = useStore((state) => state.fishes);
  const incrementFishes = useStore((state) => state.incrementFishes);
  const resetFishes = useStore((state) => state.resetFishes);
  return (
    <>
      <h5>小鱼干的数量{fishes}</h5>
      <button onClick={incrementFishes}>更多小鱼干</button>
      <button onClick={resetFishes}>重置小鱼干</button>
    </>
  );
};
