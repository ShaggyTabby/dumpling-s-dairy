import { FC, useEffect, useRef } from "react";
import useFamilyStore, {
  updateSonName,
  addDaughterName,
} from "@/store/familyStore";
import { useShallow } from "zustand/react/shallow";

export const FamilyWrapper: FC = () => {
  return (
    <>
      <FamilyMembers />
      <hr />
      <FamilyNames />
    </>
  );
};

const FamilyMembers: FC = () => {
  const members = useFamilyStore(
    useShallow((state) => Object.keys(state.family))
  );
  useEffect(() => {
    console.log("xuanran");
  });

  return (
    <>
      <h5>小熊的家庭成员：</h5>
      <p>{members.join(", ")}</p>
    </>
  );
};

const FamilyNames: FC = () => {
  const names = useFamilyStore(
    useShallow((state) => Object.values(state.family))
  );
  const ref = useRef<() => void>(null);

  useEffect(() => {
    const unsubFn = useFamilyStore.subscribe(
      (state) => state.family.son,
      (newValue, oldValue) => {
        console.log(`前${oldValue} 后${newValue}`);
      },
      { fireImmediately: true }
    );
    ref.current = unsubFn;
    return () => unsubFn();
  }, []);
  return (
    <>
      <h5>熊熊的名字：</h5>
      <p>{names.join(", ")}</p>
      <button
        onClick={() => {
          updateSonName("Chris");
        }}
      >
        修改son名字
      </button>
      <button
        onClick={() => {
          addDaughterName("Meg");
        }}
      >
        添加daughter名字
      </button>
      <button onClick={() => ref.current && ref.current()}>取消订阅</button>
    </>
  );
};
