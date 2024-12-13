<template>
    <section class="w-full">
        <div class="container flex flex-col justify-center gap-2 mx-auto my-0 py-5 xs:px-10  px-8">
            <div>
                <h1 class="text-2xl font-bold">Desertlar</h1>
            </div>
            <div class="grid md:grid-cols-3 lg:grid-cols-5 xs:grid-cols-2 grid-cols-1 gap-4">
                <RouterLink v-motion-pop-visible v-for="item in dataPitsa" to="/" class="bg-white shadow rounded px-2 py-4">
                    <img class="w-full" :src="item.image" alt="Desserts">
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
        name: 'Desserts',
        price: 100,
        image: 'https://templates.cms-guide.com/42092/images/bg-4.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
      {
        id:1,
        name: 'Desserts 1',
        price: 250,
        image: 'https://templates.cms-guide.com/42092/images/bg-4.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:2,
        name: 'Desserts 2',
        price: 350,
        image: 'https://templates.cms-guide.com/42092/images/bg-4.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:3,
        name: 'Desserts 3',
        price: 450,
        image: 'https://templates.cms-guide.com/42092/images/bg-4.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:4,
        name: 'Desserts 4',
        price: 550,
        image: 'https://templates.cms-guide.com/42092/images/bg-4.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:5,
        name: 'Desserts 5',
        price: 650,
        image: 'https://templates.cms-guide.com/42092/images/bg-4.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
    {
        id:6,
        name: 'Desserts 6',
        price: 750,
        image: 'https://templates.cms-guide.com/42092/images/bg-4.jpg',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia repellendus eius sequi ea. Iusto.',
    },
]
</script>
<style scoped>
    
</style>