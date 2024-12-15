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
  <section class="w-full">
       <div class="container flex xs:flex-row flex-col justify-between gap-2 mx-auto my-0 py-2 xs:px-10  px-8">
          <div class="flex items-center justify-center gap-2">
            <input type="text" placeholder="Qidirish" class="border w-full rounded-lg p-2">
            <button class="bg-black p-2 text-white transition-all duration-200 active:scale-90 rounded-lg">Qidirish</button>
          </div>
          <div>
            <RouterLink
            to="/likes"
            class="text-sm flex items-center justify-center gap-2 rounded-2xl bg-black text-white px-5 py-2  hover:text-white hover:bg-slate-900"
            @click="closeMenu"
            >Yoqtirilganlar<span class="flex items-center justify-center">0</span></RouterLink
          >
          </div>
        </div>
  </section>
  <RouterView />
</template>

<style scoped></style>
