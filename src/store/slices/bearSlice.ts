import { StateCreator } from "zustand";
import useStore from "@/store";
import resetters from "@/store/tools/resetters";
const initBearState = {
  bears: 0,
};
const createBearSlice: StateCreator<BearSliceType> = (set) => {
  resetters.push(() => set(initBearState));
  return {
    ...initBearState,
  };
};

// 让小熊的数量自增+1
export const incrementBears = () =>
  useStore.setState((state) => {
    state.bears++;
  });
// 重置 bears 的数量
export const resetBears = () => useStore.setState(() => initBearState);
// 根据 step 的值让 bears 数量自减
export const decrementBearsByStep = (step = 1) =>
  useStore.setState((prevState) => {
    prevState.bears -= step;
  });
// 延迟1秒后，让 bears 数量+1
export const asyncIncrementBears = () => {
  setTimeout(() => {
    // 注意这里 get() 方法的调用，它可以获取到 store 对象，并访问 store 中的数据或方法
    incrementBears();
  }, 1000);
};
export default createBearSlice;
