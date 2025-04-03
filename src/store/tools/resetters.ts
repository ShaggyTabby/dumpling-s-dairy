const resetters: (() => void)[] = [];

export default resetters;

export const reserAllStore = () => resetters.forEach((resetFn) => resetFn());
