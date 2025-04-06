const resetters: (() => void)[] = [];
export default resetters;
export const resetAllStore = () => resetters.forEach((resetFn) => resetFn());
