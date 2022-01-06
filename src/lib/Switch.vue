<template>
  <button :class="{ checked: value }" @click="toggle">
    <span></span>
  </button>
</template>
<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    value: [Boolean, String],
  },
  setup(props, context) {
    const checked = ref(false);
    const toggle = () => {
      context.emit("input", !props.value);
    };
    return { toggle };
  },
};
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: (22px-4px);
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2/2;
  transition: left 250ms;
}
button.checked {
  background: blue;
}
button.checked > span {
  left: 23px;
}
button:focus {
  outline: none;
}
</style>