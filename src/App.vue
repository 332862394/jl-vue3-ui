<script setup lang="ts">
import { ref, provide } from "vue";

const menuVisible = ref(false);
provide("menuVisible", menuVisible);
</script>

<template>
  <router-view />
</template>

