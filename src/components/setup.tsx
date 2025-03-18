import { FC } from "react";
import useStore from "@/store";

export const Father: FC = () => {
  const bears = useStore((state) => state.bears);
  return (
    <>
      <h3>father</h3>
      <p>熊有几只：{bears}</p>
      <hr />
      <Son1 />
      <Son2 />
    </>
  );
};

const Son1: FC = () => {
  // 1. 基于 selector 获取到需要的函数
  const incrementBears = useStore((state) => state.incrementBears);
  const decrementBearsByStep = useStore((state) => state.decrementBearsByStep);
  const asyncIncrementBears = useStore((state) => state.asyncIncrementBears);

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
  const resetBears = useStore((state) => state.resetBears);
  return (
    <>
      <h5>son2</h5>
      <button onClick={resetBears}>重置熊</button>
    </>
  );
};
