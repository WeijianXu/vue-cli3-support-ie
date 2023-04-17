import { pre } from '../const';

/**
 * 组件通用混入模式
 * 1. 提供组件前缀混入
 */
export default {
  data() {
    return {
      name: Object.freeze('baseUI'), // 混入的组件需要变更该变量值
    };
  },
  computed: {
    pre() {
      return Object.freeze(`${pre}${this.name}`);
    },
  },
};
