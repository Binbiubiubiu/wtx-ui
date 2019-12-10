/**
 *  设计稿基准尺寸
 */
export const designWidth = 1920;
/**
 * lib 计算px to rem
 * @param px 设计稿大小
 */
export const px2rem = (px: number | string = 0, digit = 4) =>
  +((+px / designWidth) * 10).toFixed(digit);

/**
 * lib 计算px to px
 * @param px 设计稿大小
 */
export const px2px = (px: number | string = 0, digit = 0) =>
  +((+px / designWidth) * window.innerWidth).toFixed(digit);

/**
 * 生成随机的字符串
 * @param length
 *
 */
export const randomString = (len: number = 32) => {
  var $chars =
    "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length;
  var pwd = "";
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};
