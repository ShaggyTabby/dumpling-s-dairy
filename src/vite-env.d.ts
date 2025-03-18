/// <reference types="vite/client" />

type BearType = {
  bears: number;
  incrementBears: () => void;
  resetBears: () => void;
  decrementBearsByStep: (step?: number) => void;
  asyncIncreamentBears: () => void;

  fishes: number;
  incrementFishes: () => void;
  resetFishes: () => void;
};
