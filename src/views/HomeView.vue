<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import axios from "axios";
import router from "@/router";
import LoadingPage from "../components/Loading/Main.vue";
import Notfound from "../components/NotFound/Main.vue";

const searchValue = ref("");
const isloading = ref("true");
const data = ref([]);
const likeProducts = ref([]);
const notfound = ref(false);

function Like(id) {
  const product = data.value.find((item) => item._id == id);
  if (product && !likeProducts?.value.some((item) => item._id == id)) {
    likeProducts?.value.push(product); // Massivga qo'shish
    localStorage.setItem("likes", JSON.stringify(likeProducts?.value));
  } else {
    likeProducts?.value = likeProducts?.value.filter((item) => item._id !== id);
    localStorage.setItem("likes", JSON.stringify(likeProducts?.value));
  }
}

function fetchData() {
  axios
    .get(`/api/products`)
    .then((res) => {
      if (res.status == 200) {
        isloading.value = false;
        data.value = res.data.data;
        // console.log(data.value);
      } else {
        console.error("Xatolik yuz berdi status 200 emas");
      }
    })
    .catch((error) => {
      console.error("Xatolik yuz berdi:", error);
    });
}
fetchData();

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

function fetchLikes() {
  likeProducts.value = JSON.parse(localStorage.getItem("likes"));
}
fetchLikes();
</script>

<template>
  <section class="w-full">
    <div
      class="container flex flex-col justify-center gap-2 mx-auto my-0 py-4 xs:px-6 px-1"
    >
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
          class="flex bg-white sticky top-0 py-2 z-[2] w-full xs:flex-row flex-col justify-between items-center gap-2 mx-auto my-0"
        >
          <span class="flex items-center justify-center gap-2">
            <h1 class="text-3xl font-bold text-green-500">Menu</h1>
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
              Yoqtirilganlar |
              {{ likeProducts?.length ? likeProducts?.length : 0 }}
            </button>
          </span>
        </div>
        <div>
          <h1 class="text-2xl font-bold">Barcha taomlar</h1>
        </div>
        <div :class="notfound ? 'block' : 'hidden'">
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
                width="30"
                height="30"
                :class="item.liked ? 'hidden' : 'block'"
                class="fill-red-500 cursor-pointer transition-all duration-150 active:scale-110"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m14.121 19.337c-.467.453-.942.912-1.424 1.38-.194.189-.446.283-.697.283s-.503-.094-.697-.283c-4.958-4.813-9.303-8.815-9.303-12.54 0-3.348 2.582-5.177 5.234-5.177 1.831 0 3.636.867 4.766 2.563 1.125-1.688 2.935-2.554 4.771-2.554 2.649 0 5.229 1.815 5.229 5.168 0 .681-.144 1.37-.411 2.072-.375-.361-.798-.673-1.258-.925.113-.393.169-.773.169-1.147 0-2.52-1.933-3.668-3.729-3.668-1.969 0-3.204 1.355-4.159 2.694-.141.197-.369.314-.612.314-.243-.001-.471-.119-.611-.317-.953-1.347-2.165-2.699-4.155-2.7-.985 0-1.937.346-2.61.95-.735.658-1.124 1.602-1.124 2.727 0 2.738 3.046 5.842 8.5 11.127.346-.336.682-.663 1.007-.981.327.383.701.724 1.114 1.014zm3.38-9.335c2.58 0 4.499 2.107 4.499 4.499 0 2.58-2.105 4.499-4.499 4.499-2.586 0-4.5-2.112-4.5-4.499 0-2.406 1.934-4.499 4.5-4.499zm.5 3.999v-1.5c0-.265-.235-.5-.5-.5-.266 0-.5.235-.5.5v1.5h-1.5c-.266 0-.5.235-.5.5s.234.5.5.5h1.5v1.5c0 .265.234.5.5.5.265 0 .5-.235.5-.5v-1.5h1.499c.266 0 .5-.235.5-.5s-.234-.5-.5-.5z"
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
    </div>
  </section>
</template>
