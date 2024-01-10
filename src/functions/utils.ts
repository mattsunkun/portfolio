
export const getTail = <T,>(arr: T[]): T => {
  // return (arr.length !== 0) ?
  //   arr[arr.length - 1] :
  //   undefined;
  return arr[arr.length - 1];
};

export const getNoTail = <T,>(arr: T[]): T[] => {
  return arr.slice(0, arr.length - 1);
}