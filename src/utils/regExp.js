export default {

  // 该正则表达式方便切分号码段
  phoneReg: /^(1[3-9][0-9])([0-9]{4})([0-9]{4})$/,

  isPhoneNum(val) {
    // 中国电话号码
    return this.phoneReg.test(val);
  },
};
