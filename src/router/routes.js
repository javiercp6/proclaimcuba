const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      { path: "videos", component: () => import("pages/VideosPage.vue") },
      { path: "bellas", component: () => import("pages/BellasPage.vue") },
      {
        path: "jovenesradicales",
        component: () => import("pages/JovenesRadicalesPage.vue"),
      },
      {
        path: "arteproposito",
        component: () => import("pages/ArtePropositoPage.vue"),
      },
      {
        path: "audiovisuales",
        component: () => import("pages/AudiovisualesPage.vue"),
      },
      {
        path: "campamentos",
        component: () => import("pages/CampamentosPage.vue"),
      },
      { path: "cruzadas", component: () => import("pages/CruzadasPage.vue") },
      {
        path: "jovenesradicales",
        component: () => import("pages/JovenesRadicalesPage.vue"),
      },
      {
        path: "ministerioadoracion",
        component: () => import("pages/MinisterioAdoracion.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
