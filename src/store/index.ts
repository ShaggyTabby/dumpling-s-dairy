import { create } from "zustand";
import {
  persist,
  createJSONStorage,
  devtools,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import createBearSlice from "@/store/slices/bearSlice";
import createFishSlice from "@/store/slices/fishSlice";
const useStore = create<BearSliceType & FishSliceType>()(
  subscribeWithSelector(
    immer(
      devtools(
        persist(
          (...a) => {
            // // store 中的数据、方法
            return {
              ...createBearSlice(...a),
              ...createFishSlice(...a),
            };
          },
          {
            name: "store",
            storage: createJSONStorage(() => sessionStorage),
            partialize: (state) => {
              const keys = ["bears"];
              const selectedEntries = Object.entries(state).filter((entry) =>
                keys.includes(entry[0])
              );
              return Object.fromEntries(selectedEntries);
            },
          }
        ),
        { name: "app-store" }
      )
    )
  )
);

export default useStore;
