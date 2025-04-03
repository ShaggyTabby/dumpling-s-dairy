import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import resetters from "@/store/tools/resetters";

const initBearState = {
  bears: 0,
};

const useBearStore = create<BearStoreType>()(
  immer(
    devtools(
      persist(
        (set) => {
          resetters.push(() => set(initBearState));
          return {
            ...initBearState,
          };
        },
        { name: "bear-store" }
      ),
      { name: "bearStore" }
    )
  )
);

// 让小熊的数量自增+1
export const incrementBears = () =>
  useBearStore.setState((state) => {
    state.bears++;
  });
// 重置 bears 的数量
export const resetBears = () => useBearStore.setState({ bears: 0 });
// 根据 step 的值让 bears 数量自减
export const decrementBearsByStep = (step = 1) =>
  useBearStore.setState((state) => {
    state.bears -= step;
  });
// 延迟1秒后，让 bears 数量+1
export const asyncIncrementBears = () => {
  setTimeout(() => {
    // 注意这里 get() 方法的调用，它可以获取到 store 对象，并访问 store 中的数据或方法
    incrementBears();
  }, 1000);
};

export default useBearStore;
