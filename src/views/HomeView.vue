<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const data=[
    {
        id:1,
        name: 'Kombo',
        price: 250,
        image: 'https://будем-жарить.рф/upload/iblock/9a0/lw8r56xqa2dylwq2qv2sjcvnequ5fyaf.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:2,
        name: 'Kombo 2',
        price: 350,
        image: 'https://будем-жарить.рф/upload/iblock/9a0/lw8r56xqa2dylwq2qv2sjcvnequ5fyaf.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:3,
        name: 'Kombo 3',
        price: 450,
        image: 'https://будем-жарить.рф/upload/iblock/9a0/lw8r56xqa2dylwq2qv2sjcvnequ5fyaf.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:4,
        name: 'Kombo 4',
        price: 550,
        image: 'https://будем-жарить.рф/upload/iblock/9a0/lw8r56xqa2dylwq2qv2sjcvnequ5fyaf.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:5,
        name: 'Kombo 5',
        price: 650,
        image: 'https://будем-жарить.рф/upload/iblock/9a0/lw8r56xqa2dylwq2qv2sjcvnequ5fyaf.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:6,
        name: 'Kombo 6',
        price: 750,
        image: 'https://будем-жарить.рф/upload/iblock/9a0/lw8r56xqa2dylwq2qv2sjcvnequ5fyaf.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:7,
        name: 'Kombo 7',
        price: 850,
        image: 'https://будем-жарить.рф/upload/iblock/9a0/lw8r56xqa2dylwq2qv2sjcvnequ5fyaf.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    }
]
</script>

<template>
    <section class="w-full">
        <div class="container flex flex-col justify-center gap-2 mx-auto my-0 py-5 xs:px-10  px-8">
            <div>
                <h1 class="text-2xl font-bold">Kombo</h1>
            </div>
            <div class="grid md:grid-cols-3 lg:grid-cols-5 xs:grid-cols-2 grid-cols-1 gap-4">
                <RouterLink v-for="item in data" to="/" class="bg-white shadow rounded px-2 py-4">
                    <img class="w-full" :src="item.image" alt="Kombo">
                    <h2 class="font-bold text-xl">{{item.name}}</h2>
                    <p class="text-sm">{{item.description}}</p>
                    <span class="text-2xl font-bold">{{item.price}} so'm</span>
                </RouterLink>
            </div>
        </div>
    </section>
</template>
