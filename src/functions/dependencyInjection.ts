
const isDev: boolean = true;

export const msgAlert = (strMsg: string) => {
  if (isDev) {
    console.log(strMsg)
    console.error(strMsg);
  } else {
    alert(strMsg)
  }
}