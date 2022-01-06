<script setup lang="ts">
import { ref, provide } from "vue";
const width = document.documentElement.clientWidth;

const menuVisible = ref(width <= 500 ? false : true);
provide("menuVisible", menuVisible);
</script>

<template>
  <router-view />
</template>

