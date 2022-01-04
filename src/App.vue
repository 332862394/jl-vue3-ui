<script setup lang="ts">
import HelloW2 from "./components/HelloW2.vue";
</script>

<template>
  <div>导航栏</div>
  <router-link to="/">hellow</router-link>|
  <router-link to="/xxx">test</router-link>
  <hr />
  <router-view />
</template>

