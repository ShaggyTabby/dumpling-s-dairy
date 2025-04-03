import { create } from "zustand";
import {
  persist,
  createJSONStorage,
  devtools,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import resetters from "@/store/tools/resetters";

const initFishState = { fishes: 0 };

const useFishStore = create<FishStoreType>()(
  subscribeWithSelector(
    immer(
      devtools(
        persist(
          (set) => {
            resetters.push(() => set(initFishState));
            return {
              ...initFishState,
            };
          },
          {
            name: "fish-store",
            storage: createJSONStorage(() => sessionStorage),
          }
        ),
        { name: "fishStore" }
      )
    )
  )
);

export const incrementFishes = () =>
  useFishStore.setState((state) => {
    state.fishes++;
  });
export const resetFishes = () => useFishStore.setState({ fishes: 0 });

export default useFishStore;
