<template>
  <div>Button示例</div>
  <h1>示例1</h1>
  <div><Button @click="onClick">按钮</Button></div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("你好");
    };
    return { onClick };
  },
};
</script>