<script>
export default {
    props: {
        products: { type: Array, default: [] },
    },
    methods: {
        goToProduct(id) {
            this.$router.push(`/productdetail/${id}`);
        },
    },
}
</script>

<template>
    <div class="product-list">
        <div class="product" v-for="(product, index) in products" :key="product._id" @click="goToProduct(product._id)">
            <img :src="product.image" alt="Product Image">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">{{ product.price }}đ</p>

        </div>
    </div>
</template>
