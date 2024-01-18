
const keys = {
  a: "a",
  b: "b",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
}
export const konami: { complete: string[], _status: string[], push: (key: KeyboardEvent) => boolean } = {
  complete: [
    keys.up, keys.up, keys.down, keys.down,
    keys.left, keys.right, keys.left, keys.right,
    keys.b, keys.a
  ],
  _status: [],
  push: (event: KeyboardEvent) => {

    // console.log(event.key, konami._status)
    // とりあえず追加する．
    konami._status.push(event.key);

    // 比較をするための文字列を作る．
    const strComp = konami.complete.join("");
    const strStat = konami._status.join("");

    if (strComp === strStat) {
      // 合致した場合．
      // スタックを消す．
      konami._status = [];
      return true;
    } else if (strComp.startsWith(strStat)) {
      // 先頭部分文字列の場合
      return false;
    } else {
      // 部分文字列にならなかった時
      if (
        (konami._status.length === 3) &&
        (konami._status.every(ele => ele === konami.complete[0]))
      ) {
        // 上が3つ連続した時は，2つ連続に戻す．
        konami._status.pop();
      } else {
        // スタックを消す．
        konami._status = [];
      }
      return false;
    }

  }

}

export default konami;