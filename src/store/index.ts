import { create } from "zustand";

const useStore = create<BearType>()((set, get) => {
  // // store 中的数据、方法
  return {
    // 小熊的数量
    bears: 0,
    // 让小熊的数量自增+1
    incrementBears: () => set((state) => ({ bears: state.bears + 1 })),
    // 重置 bears 的数量
    resetBears: () => set(() => ({ bears: 0 })),
    // 根据 step 的值让 bears 数量自减
    decrementBearsByStep: (step = 1) =>
      set((state) => ({ bears: (state.bears -= step) })),
    // 延迟1秒后，让 bears 数量+1
    asyncIncrementBears: () => {
      setTimeout(() => {
        // 注意这里 get() 方法的调用，它可以获取到 store 对象，并访问 store 中的数据或方法
        get().incrementBears();
      }, 1000);
    },
    fishes: 0,
    incrementFishes: () => set((state) => ({ fishes: state.fishes + 1 })),
    resetFishes: () => set({ fishes: 0 }),
  };
});

export default useStore;
