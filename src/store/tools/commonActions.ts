import useStore from "@/store";
import { incrementBears } from "@/store/slices/bearSlice";
import { incrementFishes } from "@/store/slices/fishSlice";
export const addBearAndFish = () => {
  const bears = useStore.getState().bears;
  if (bears < 4) {
    incrementBears();
    incrementFishes();
  } else {
    incrementFishes();
  }
};
