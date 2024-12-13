<template>
    <section>
        <div class="container">
            <div>
                <h1>Kombo</h1>
            </div>
            <div>
                <div class="card">
                    <img :src="kombo.image" alt="Kombo">
                    <h2>{{ kombo.name }}</h2>
                    <p>{{ kombo.description }}</p>
                    <button @click="addToCart(kombo)">Add to Cart</button>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
</script>
<style scoped>
    
</style>