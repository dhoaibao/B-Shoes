<template>
    <div class="container-main">
        <Filter />
        <ProductList :products="products" />
    </div>
</template>
  
<script>
import Filter from "/src/components/Filter.vue";
import ProductList from "/src/components/ProductList.vue";
import ProductService from '/src/services/product.service.js';

export default {
    components: {
        Filter,
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
                    this.products = response.filter((product) => product.type === "women");
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
  