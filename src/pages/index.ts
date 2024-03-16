// export * from './Home';
// export * from './About';
// export * from './Skills';
// export * from './Products';
// export * from './History';
// export * from './Pnf';

const privacyPolicy: string = "privacy-policy";
const termsAndConditions: string = "terms-and-conditions";

// enumはdynamicがダメ
export const ppMathing: string = `${privacyPolicy}/mathing`;
export const tcMathing: string = `${termsAndConditions}/mathing`;


export enum ePage {
  home = "",
  home2 = "Home",
  about = "About",
  skills = "Skills",
  works = "Works",
  // dynamicな代入はできない．
  // ppMathing = _ppMathing, 
  // tcMathing = _tcMathing, 

  // pages/ に実体のページ追加
  // App.tsxにルーティングを追加
  // linkをtopbarとかfootbar とかに必要に応じて追加(privacy-policyは追加してない)
  pnf = "pnf",
}