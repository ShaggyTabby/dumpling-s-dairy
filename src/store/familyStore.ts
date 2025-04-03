import { create } from "zustand";
import { persist, devtools, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import resetters from "@/store/tools/resetters";

// 初始数据
const initFamilyState: FamilyType = {
  family: {
    father: "peter",
    mother: "louis",
    son: "dumpling",
  },
};

// 创建 Store 的 Hook
const useFamilyStore = create<FamilyType>()(
  subscribeWithSelector(
    immer(
      // 配置 immer 中间件
      devtools(
        persist(
          (set) => {
            resetters.push(() => set(initFamilyState));
            return {
              ...initFamilyState,
            };
          },
          { name: "family-store" }
        )
      )
    )
  )
);

export const updateSonName = (sonName: string) => {
  useFamilyStore.setState((state) => {
    state.family.son = sonName;
  });
};

export const addDaughterName = (daughterName: string) => {
  useFamilyStore.setState((state) => {
    state.family.daughter = daughterName;
  });
};

// 导入 Store 的 Hook
export default useFamilyStore;
