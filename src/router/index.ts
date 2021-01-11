import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from 'vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/app2',
        name: 'HomeApp2',
        component: defineAsyncComponent(() => import(/* webpackChunkName: "HomeApp2" */ '../layout/pages/HomeApp2.vue'))
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
