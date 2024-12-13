<template>
    <section class="w-full">
        <div class="container flex flex-col justify-center gap-2 mx-auto my-0 py-5 xs:px-10  px-8">
            <div>
                <h1 class="text-2xl font-bold">Pitsa</h1>
            </div>
            <div class="grid md:grid-cols-3 lg:grid-cols-5 xs:grid-cols-2 grid-cols-1 gap-4">
                <RouterLink v-motion-pop-visible v-for="item in dataPitsa" to="/" class="bg-white shadow rounded px-2 py-4">
                    <img class="w-full" :src="item.image" alt="Salads">
                    <h2 class="font-bold text-xl">{{item.name}}</h2>
                    <p class="text-sm">{{item.description}}</p>
                    <span class="text-2xl font-bold">{{item.price}} so'm</span>
                </RouterLink>
            </div>
        </div>
    </section>
</template>
<script setup>
const dataPitsa=[
    {
        id:1,
        name: 'Salads',
        price: 100,
        image: 'https://static.tildacdn.com/tild6438-6366-4632-a237-626132623132/1-salat-s-kuracim-ma.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
      {
        id:1,
        name: 'Salads 1',
        price: 250,
        image: 'https://static.tildacdn.com/tild6438-6366-4632-a237-626132623132/1-salat-s-kuracim-ma.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:2,
        name: 'Salads 2',
        price: 350,
        image: 'https://static.tildacdn.com/tild6438-6366-4632-a237-626132623132/1-salat-s-kuracim-ma.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:3,
        name: 'Salads 3',
        price: 450,
        image: 'https://static.tildacdn.com/tild6438-6366-4632-a237-626132623132/1-salat-s-kuracim-ma.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:4,
        name: 'Salads 4',
        price: 550,
        image: 'https://static.tildacdn.com/tild6438-6366-4632-a237-626132623132/1-salat-s-kuracim-ma.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:5,
        name: 'Salads 5',
        price: 650,
        image: 'https://static.tildacdn.com/tild6438-6366-4632-a237-626132623132/1-salat-s-kuracim-ma.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:6,
        name: 'Salads 6',
        price: 750,
        image: 'https://static.tildacdn.com/tild6438-6366-4632-a237-626132623132/1-salat-s-kuracim-ma.png',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
]
</script>
<style scoped>
    
</style>