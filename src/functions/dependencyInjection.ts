
const isDev: boolean = true;

export const msgAlert = (strMsg: string) => {
  if (isDev) {
    console.log(strMsg)
  } else {
    alert(strMsg)
  }
}