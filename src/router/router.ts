import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		component: () => import("../pages/Main.vue"),
	},
	{
		path: "/home",
		component: () => import("../pages/UserPage.vue"),
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(),
});

export default router;
