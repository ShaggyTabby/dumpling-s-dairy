import { FC, useState, useEffect } from "react";
import useStore from "@/store";
import {
  incrementBears,
  decrementBearsByStep,
  asyncIncrementBears,
  resetBears,
} from "@/store/slices/BearSlice";
import { addBearAndFish } from "@/store/tools/commonActions";
import { resetAllStore } from "@/store/tools/resetters";

export const Father: FC = () => {
  const bears = useStore((state) => state.bears);
  const [bgColor, setBgColor] = useState<"lightgreen" | "lightgray">(
    "lightgreen"
  );
  useEffect(() => {
    const unsubFn = useStore.subscribe(
      (state) => state.fishes,
      (newValue) => {
        setBgColor(newValue >= bears * 5 ? "lightgreen" : "lightgray");
      },
      { fireImmediately: true }
    );
    return () => unsubFn();
  }, [bears]);
  return (
    <div
      style={{
        padding: 10,
        borderRadius: 5,
        backgroundColor: bgColor,
        transition: "background-color 0.3s",
      }}
    >
      <h3>father</h3>
      <p>熊有几只：{bears}</p>
      <hr />
      <Son1 />
      <Son2 />
    </div>
  );
};

const Son1: FC = () => {
  return (
    <>
      <h5>Son1组件</h5>
      {/* 2. 绑定为按钮的点击事件处理函数 */}
      <button onClick={incrementBears}>bears+1</button>
      <button onClick={() => decrementBearsByStep(5)}>bears-5</button>
      <button onClick={asyncIncrementBears}>1秒后bears+1</button>
    </>
  );
};

const Son2: FC = () => {
  const reset = () => {
    resetAllStore();
    useStore.persist.clearStorage();
  };
  return (
    <>
      <h5>son2</h5>
      <button onClick={resetBears}>重置熊</button>
      <button onClick={addBearAndFish}>同时增加bear和fish</button>
      <button onClick={reset}>重置store</button>
    </>
  );
};
