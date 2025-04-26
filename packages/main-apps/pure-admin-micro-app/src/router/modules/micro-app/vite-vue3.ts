export default {
  path: "/micro",
  redirect: "/micro/vue3-vite/home",
  meta: {
    title: "vue3-vite应用",
    rank: 14
  },
  children: [
    {
      path: "/micro/vue3-vite/:page*", // 动态路由 匹配
      name: "MicroViteVue3",
      component: () => import("@/views/micro/vue3-vite.vue"),
      meta: {
        title: "vue3-vite应用"
      }
    }
  ]
} as RouteConfigsTable;
