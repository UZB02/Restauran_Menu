<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import router from "@/router";
import LoadingPage from "../components/Loading/Main.vue";
import Notfound from "../components/NotFound/Main.vue";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
const toast = useToast();

const searchValue = ref("");
const isloading = ref(false);
const data = ref(JSON.parse(localStorage.getItem("likes")));
const nun = ref(false);

const notfound = ref(false);

function fetchData() {
 if(data.value.length > 0) {
  notfound.value=false;
 }else{
  notfound.value=true
 }
 console.log(data.value);
}
fetchData();

function Like(id) {
  data.value = data.value.filter((item) => item._id !== id);
  // showSuccess()
  fetchData()
  localStorage.setItem("likes", JSON.stringify(data.value));
}

const search = computed(() => {
  if (searchValue.value) {
    let findobekt = data.value.filter((item) =>
      item.name.toLowerCase().includes(searchValue.value.toLowerCase())
    );
    if (findobekt.length == 0) {
      notfound.value = true;
    } else {
      notfound.value = false;
      return findobekt;
    }
  } else {
    return data.value;
  }
});


// function showSuccess() {
//   toast.add({
//     severity: "success",
//     summary: "Muvofaqqiyatli bajarildi",
//     life: 3000,
//   });
// }

</script>

<template>
    <section class="w-full">
        <div
        class="container flex flex-col justify-center gap-2 mx-auto my-0 py-4 xs:px-6 px-1"
        >
        <!-- <Toast style="max-width: 300px" /> -->
      <div
        :class="
          isloading
            ? 'h-[70vh] flex flex-col items-center justify-center'
            : 'hidden'
        "
      >
        <LoadingPage />
      </div>
      <div :class="isloading ? 'hidden' : 'flex flex-col gap-2'">
        <div
          class="flex bg-white sticky top-0 py-2 z-20 w-full xs:flex-row flex-col justify-between items-center gap-2 mx-auto my-0"
        >
          <span
            class="flex sm:text-3xl text-xl items-center justify-center gap-2"
          >
            <RouterLink to="/" class="font-bold"> Asosiy </RouterLink> |
            <h1 class="font-bold text-green-500">Yoqtirilganlar</h1>
          </span>
          <span
            class="flex xs:w-auto w-full xs:flex-row flex-col items-center justify-center gap-1"
          >
            <div
              class="flex xs:w-auto w-full items-center justify-center gap-1"
            >
              <input
                type="text"
                v-model="searchValue"
                placeholder="Qidirish"
                class="border outline-green-500 w-full shadow-md rounded-lg p-2"
              />
            </div>
            <button
              @click="router.push('/likes')"
              class="bg-green-500 xs:w-auto w-full p-2 text-white transition-all duration-200 active:scale-90 rounded-lg"
            >
              Yoqtirilganlar | {{ data?.length ? data?.length : 0 }}
            </button>
          </span>
        </div>
        <div :class="notfound ? 'block' : 'hidden'">
          <Notfound></Notfound>
        </div>
         <div :class="nun ? 'block' : 'hidden'">
          <Notfound></Notfound>
        </div>
        <div
          class="grid md:grid-cols-3 lg:grid-cols-5 xs:grid-cols-2 grid-cols-1 gap-4"
        >
          <div
            v-motion-pop-visible
            v-for="item in search"
            to="/"
            class="bg-white shadow rounded px-2 py-4"
          >
            <span class="absolute right-2">
              <svg
                @click="Like(item._id)"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                width="30"
                height="30"
                class="fill-red-500 cursor-pointer transition-all duration-150 active:scale-110"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m14.123 19.336c-.468.453-.944.913-1.426 1.381-.194.189-.446.283-.697.283s-.503-.094-.697-.283c-4.958-4.813-9.303-8.815-9.303-12.54 0-5.659 7.376-6.978 10-2.461 2.604-4.483 10-3.217 10 2.461 0 .68-.144 1.369-.41 2.07-1.061-1.02-2.503-1.648-4.089-1.648-3.257 0-5.9 2.644-5.9 5.9 0 2 .997 3.77 2.522 4.837zm3.377-9.336c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm.707 4.5s.642-.642 1.061-1.061c.187-.187.187-.519 0-.707-.188-.187-.52-.187-.707 0-.419.419-1.061 1.061-1.061 1.061s-.642-.642-1.061-1.061c-.187-.187-.519-.187-.707 0-.187.188-.187.52 0 .707.419.419 1.061 1.061 1.061 1.061s-.642.642-1.061 1.061c-.187.187-.187.519 0 .707.188.187.52.187.707 0 .419-.419 1.061-1.061 1.061-1.061s.642.642 1.061 1.061c.187.187.519.187.707 0 .187-.188.187-.52 0-.707-.419-.419-1.061-1.061-1.061-1.061z"
                  fill-rule="nonzero"
                />
              </svg>
            </span>
            <img
              class="w-full"
              src="https://i.pinimg.com/736x/19/6e/86/196e86843d9e8caaafc92b08af1ea7b9.jpg"
              alt="Kombo"
            />
            <RouterLink to="/">
              <h2 class="font-bold text-xl">{{ item.name }}</h2>
              <p class="text-sm line-clamp-1">{{ item.description }}</p>
              <span class="text-2xl font-bold">{{ item.price }} so'm</span>
            </RouterLink>
          </div>
        </div>
      </div>
      <Toast style="max-width: 300px" />
    </div>
  </section>
</template>
