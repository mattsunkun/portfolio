
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

export const dateNormalForm = (date?: Date): { year: number, month: number } => {
  if (!date) {
    console.error("Date is UNDEFINED!!!");
    date = new Date();
  }
  return {
    year: (date.getMonth() === 0) ?
      (date.getFullYear() - 1) :
      (date.getFullYear()),
    month: (date.getMonth() === 0) ?
      (12) :
      date.getMonth()
  }
}

export const concatDirectory = (strsDir: string[], isWantSlash?: boolean): string => {
  if (strsDir.length < 1) {
    return strsDir.join("");
  } else {
    let agent = strsDir[0];
    for (const strDir of strsDir.slice(1)) {
      // 今の状態の末尾のスラッシュを消す．
      agent = agent.replace(/\/$/, "")

      // 次の状態の最初のスラッシュを消す．
      const strAppendy = strDir.replace(/^\//, "")

      agent += `/${strAppendy}`;
    }

    const regexSlashEnd = /\/$/;
    const isExistsSlash = agent.match(regexSlashEnd);

    if (isExistsSlash && !isWantSlash) {
      agent = agent.replace(regexSlashEnd, "");
    }

    if (!isExistsSlash && isWantSlash) {
      agent += "/";
    }

    return agent;

  }
}