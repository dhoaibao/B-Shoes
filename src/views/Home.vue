<template>
    <main>
      <section class="hero">
        <div class="hero-text">
          <h1>Giày dép chất lượng</h1>
        <p>Chào mừng đến với B-SHOES. Chúng tôi cung cấp những đôi giày và dép tốt nhất cho mọi đối tượng khách hàng.</p>
        <div class="button"><router-link to="/featured" class="router-link">Mua sắm ngay</router-link></div>
        </div>
      </section>
      <section class="products">
        <h2>Sản phẩm nổi bật</h2>
        <!-- <ProductList :products="products" /> -->
      </section>
    </main>
  </template>

<script>
import ProductList from "/src/components/ProductList.vue";
import ProductService from '/src/services/product.service.js';

export default {
    components: {
        ProductList,
    },
    data() {
        return {
            products: [],
        };
    },
    methods: {
        async retrieveProducts() {
            try {
                const response = await ProductService.getAll();
                if (response !== null && response.length > 0) {
                    this.products = response;
                }
            } catch (error) {
                console.log(error);
            }
        },
    },
    created() {
        this.retrieveProducts();
    },
};
</script>