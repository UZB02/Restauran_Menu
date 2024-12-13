<template>
  <div class="container  flex mx-auto justify-between items-center">
    <RouterLink to="/" class="text-3xl font-bold leading-none">
      <img class="w-24" src="../../img/logo.png" alt="" />
    </RouterLink>
    <div class="flex lg:py-8 py-4 flex-row-reverse">
      <div class="lg:hidden">
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
        <li>
          <RouterLink
            to="/"
            class="text-sm text-white rounded-2xl bg-green-500 px-5 py-2  hover:text-green-600"
            @click="closeMenu"
            >Kombo</RouterLink
          >
        </li>
        
        <li>
          <RouterLink
            to="/"
            class="text-sm  rounded-2xl bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >Pitsa</RouterLink
          >
        </li>
        
        <li>
          <RouterLink
            to="/"
            class="text-sm  rounded-2xl bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >Gazaklar</RouterLink
          >
        </li>
        <li>
          <RouterLink
            to="/"
            class="text-sm  rounded-2xl bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >Ichimliklar</RouterLink
          >
        </li>
        
        <li>
          <RouterLink
            to="/"
            class="text-sm  rounded-2xl bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >Salatlar</RouterLink
          >
        </li>
        
        <li>
          <RouterLink
            to="/"
            class="text-sm  rounded-2xl bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >Desertlar</RouterLink
          >
        </li>
        
        <li>
          <RouterLink
            to="/"
            class="text-sm  rounded-2xl bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >Souslar</RouterLink
          >
        </li>
        
        <li>
          <RouterLink
            to="/"
            class="text-sm flex items-center justify-center gap-2 rounded-2xl bg-black text-white px-5 py-2  hover:text-white hover:bg-slate-900"
            @click="closeMenu"
            >Yoqtirilganlar<span class="flex items-center justify-center">0</span></RouterLink
          >
        </li>
        <!-- Add other menu items similarly -->
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
          <li class="mb-1 ">
             <RouterLink
            to="/"
            class="text-sm w-full block text-center text-white rounded-2xl bg-green-500 px-5 py-2  hover:text-green-600"
            @click="closeMenu"
            >Kombo</RouterLink
            >
          </li>
          <li class="mb-1">
            <RouterLink
            to="/"
            class="text-sm w-full block text-center rounded-2xl bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >Pitsa</RouterLink
            >
          </li>
          <li class="mb-1">
           <RouterLink
            to="/"
            class="text-sm w-full block text-center rounded-2xl bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >Gazaklar</RouterLink>
          </li>
          <li class="mb-1">
            <RouterLink
            to="/"
            class="text-sm w-full block text-center rounded-2xl bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >Ichimliklar</RouterLink>
          </li>
          <li class="mb-1">
            <RouterLink
            to="/"
            class="text-sm w-full block text-center rounded-2xl bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >Salatlar</RouterLink>
          </li>
          <li class="mb-1">
            <RouterLink
            to="/"
            class="text-sm w-full block text-center  rounded-2xl bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >Desertlar</RouterLink>
          </li>
          <li class="mb-1">
            <RouterLink
            to="/"
            class="text-sm w-full block text-center rounded-2xl bg-slate-200 px-5 py-2  hover:text-white hover:bg-green-500"
            @click="closeMenu"
            >Souslar</RouterLink>
          </li>
          <li class="mb-1">
            <button
              class="lg:inline-block w-full py-2 px-6 bg-black hover:bg-slate-900 text-sm text-white font-bold rounded-xl transition duration-200"
              @click="redirectToPhoneNumber()"
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

const menu = ref(null);


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

function redirectToPhoneNumber() {
  const phoneNumber = "+998917622603";
  window.location.href = `tel:${phoneNumber}`;
}
</script>
<style></style>
