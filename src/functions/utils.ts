
export const getTail = <T,>(arr: T[]): T => {
  // return (arr.length !== 0) ?
  //   arr[arr.length - 1] :
  //   undefined;
  return arr[arr.length - 1];
};

export const getNoTail = <T,>(arr: T[]): T[] => {
  return arr.slice(0, arr.length - 1);
}

// [""], ['']の違いがあるかも
export const isSame = <T,>(arr1: T[], arr2: T[]): boolean => {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

export const escapeRegExp = (strRaw: string): string => {
  return strRaw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}