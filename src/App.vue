<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "./components/Nav/Main.vue";
</script>

<template>
   <header class="sticky top-0 bg-white z-[10]">
    <nav
      class="sticky top-0 px-4 flex justify-between items-center border-b"
    >
      <div class="container mx-0">
        <Nav></Nav>
        <!-- <AppTopbar /> -->
      </div>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped></style>
