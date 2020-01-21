<template>
  <div :class="pre">
    <h4 :class="`${pre}-title`">{{ title }}</h4>
    <Card>
      <slot></slot>
    </Card>
  </div>
</template>

<script>
import baseUI from './mixins/baseUI';

const name = 'articalCard';

export default {
  name,
  mixins: [baseUI],
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      name: Object.freeze(name),
    };
  },
};
</script>

<style lang="scss">
@import "@/theme/variants";

$pre: "#{$uiPre}articalCard";

.#{$pre} {
  .#{$pre}-title {
    font-size: 20px;
    font-weight: 400;
    margin: 12px 0;
  }
}
</style>
