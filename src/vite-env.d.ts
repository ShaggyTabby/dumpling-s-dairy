/// <reference types="vite/client" />

type BearStoreType = {
  bears: number;
};

type FishStoreType = {
  fishes: number;
};

type FamilyType = {
  family: {
    father: string;
    mother: string;
    son: string;
    daughter?: string;
  };
};
