<template>
  <div class="container  flex mx-auto my-0 justify-between items-center">
    <div class="flex lg:py-8 py-4 w-full flex-row-reverse ">
      <div class="lg:hidden flex justify-end  w-full">
        <button class="navbar-burger bg-green-500 flex justify-center gap-2 items-center text-white rounded-lg px-4 py-2">
          <span>Menu</span>
          <svg
            class="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul
        class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6"
      >
     <li v-for="(item, itemKey) in allcatalogues" class="mb-1 ">
             <RouterLink
            to="/"
            class="text-sm w-full block text-center rounded-2xl bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >{{item.name}}</RouterLink
            >
          </li>
      </ul>
    </div>
  </div>
  <div class="navbar-menu transition duration-200 relative z-50 hidden">
    <nav
      class="fixed top-0 left-0 z-50 bottom-0 bg-white flex flex-col w-5/6 max-w-sm py-6 px-6 border-r overflow-y-auto"
    >
      <div class="flex items-center mb-8">
        <a class="mr-auto text-3xl font-bold leading-none">
          <img class="w-24" src="https://i.pinimg.com/736x/38/fa/18/38fa18f2bb82b1ced249d170436fd333.jpg" alt="rasm" />
        </a>
        <button class="navbar-close">
          <svg
            class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div>
        <ul class="flex flex-col gap-3">
          <li v-for="(item, itemKey) in allcatalogues" class="mb-1 ">
             <RouterLink
            to="/"
            class="text-sm w-full block text-center rounded-sm bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >{{item.name}}</RouterLink
            >
          </li>
          <li class="mb-1">
            <button
              class="lg:inline-block w-full py-2 px-6 bg-black hover:bg-slate-900 text-sm text-white font-bold rounded-sm transition duration-200"
            >
              Yoqtirilganlar | 0
            </button>
          </li>
          <!-- Add other mobile menu items similarly -->
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";

const menu = ref(null);

const allcatalogues = ref([]);


function toggleMenu() {
  menu.value.classList.toggle("hidden");
}

function closeMenu() {
  if (menu.value) {
    menu.value.classList.add("hidden");
  }
}

onMounted(() => {
  menu.value = document.querySelector(".navbar-menu");

  // open
  const burger = document.querySelector(".navbar-burger");
  if (burger) {
    burger.addEventListener("click", toggleMenu);
  }

  // close
  const closeButton = document.querySelector(".navbar-close");
  const backdrop = document.querySelector(".navbar-backdrop");
  if (closeButton) {
    closeButton.addEventListener("click", closeMenu);
  }
  if (backdrop) {
    backdrop.addEventListener("click", closeMenu);
  }
});

function GetCatalogues() {
  axios
    .get(`/api/category/`)
    .then((response) => {
      if (response.status == 200) {
        allcatalogues.value = response.data.data;
        console.log(response.data.data);
      }
    })
    .catch((error) => {
      console.error("Xatolik yuz berdi:", error);
    });
}
GetCatalogues();
</script>
<style></style>
