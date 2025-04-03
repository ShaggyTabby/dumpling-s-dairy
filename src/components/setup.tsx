import { FC, useState, useEffect } from "react";
import useBearStore, {
  incrementBears,
  decrementBearsByStep,
  asyncIncrementBears,
  resetBears,
} from "@/store/bearStore";
import useFishStore from "@/store/fishStore";
import { reserAllStore } from "@/store/tools/resetters";

export const Father: FC = () => {
  const bears = useBearStore((state) => state.bears);
  const [bgColor, setBgColor] = useState<"pink|lightblue">("pink");
  useEffect(() => {
    const unsubFn = useFishStore.subscribe(
      (state) => state.fishes,
      (newValue) => {
        setBgColor(newValue >= 5 ? "pink" : "lightblue");
      },
      { fireImmediately: true }
    );
    return () => unsubFn();
  }, []);
  return (
    <div style={{ padding: 10, borderRadius: 5, backgroundColor: bgColor }}>
      <h3>father</h3>
      <p>熊有几只：</p>
      <h3>father</h3>
      <p>熊有几只：{bears}</p>
      <hr />
      <Son1 />
      <Son2 />
    </div>
  );
};

const Son1: FC = () => {
  // 1. 基于 selector 获取到需要的函数

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
  return (
    <>
      <h5>son2</h5>
      <button onClick={resetBears}>重置熊</button>
      <button onClick={reserAllStore}>重置所有</button>
    </>
  );
};
