import { StateCreator } from "zustand";
import useStore from "@/store";
import resetters from "@/store/tools/resetters";
const initFishState = {
  fishes: 0,
};

const createFishSlice: StateCreator<FishSliceType> = (set) => {
  resetters.push(() => set(initFishState));
  return {
    ...initFishState,
  };
};
export const incrementFishes = () =>
  useStore.setState((state) => {
    state.fishes++;
  });
export const resetFishes = () => useStore.setState(initFishState);
export default createFishSlice;
