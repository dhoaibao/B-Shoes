<template>
    <main>
        <div class="product-detail">
            <div class="product-image">
                <img :src="product.image" :alt="product.name" />
            </div>
            <div class="product-info">
                <h1>{{ product.name }}</h1>
                <p class="product-price">{{ product.price }}đ</p>
                <p class="product-description">{{ product.description }}</p>
                <form>
                    <!-- <label for="size-select">Size:</label>
                    <select id="size-select">
                        <option v-for="size in product.sizes" :key="size">{{ size }}</option>
                    </select> -->
                    <label for="quantity-select">Quantity:</label>
                    <input type="number" id="quantity-select" name="quantity" min="1" max="100" v-model.number="quantity" />
                    <button type="submit" @click.prevent="addToCart">Add to cart</button>
                </form>
            </div>
        </div>
    </main>
</template>

<script>
import ProductService from '/src/services/product.service.js';
export default {
    data() {
        return {
            productId: null,
            product: {},
            quantity: 1,
        };
    },
    async created() {
        this.productId = this.$route.params.id;
        this.product = await ProductService.get(this.productId);
    },
    methods: {
        addToCart() {
            alert(`Thêm vào giỏ hàng thành công!`);
        },
    },
};
</script>

