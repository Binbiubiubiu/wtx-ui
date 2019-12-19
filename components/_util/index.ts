/**
 * 浅拷贝
 * @param args
 */
export const shallowMerge = (...args: any) => Object.assign({}, ...args);

/**
 * 生成随机的字符串
 * @param length
 *
 */
export const randomString = (len = 32) => {
  const $chars =
    'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1*** */
  const maxPos = $chars.length;
  let pwd = '';
  for (let i = 0; i < len; i += 1) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};
