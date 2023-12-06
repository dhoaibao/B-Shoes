import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("@/views/Home.vue")
    },

    {
        path: "/featured",
        name: "featured",
        component: () => import("@/views/Featured.vue")
    },

    {
        path: "/men",
        name: "men",
        component: () => import("@/views/Men.vue")
    },

    {
        path: "/women",
        name: "women",
        component: () => import("@/views/Women.vue")
    },

    {
        path: "/kids",
        name: "kids",
        component: () => import("@/views/Kids.vue")
    },

    {
        path: "/login",
        name: "login",
        component: () => import("@/views/Login.vue")
    },

    {
        path: "/register",
        name: "register",
        component: () => import("@/views/Register.vue")
    },

    {
        path: "/cart",
        name: "cart",
        component: () => import("@/views/Cart.vue")
    },

    {
        path: "/productdetail/:id",
        name: "productdetail",
        component: () => import("@/views/ProductDetail.vue")
    },

];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});
export default router;  