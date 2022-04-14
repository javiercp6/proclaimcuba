<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-secondary text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> LOGO</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> </q-item-label>
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Inicio</q-item-label>
          </q-item-section>
        </q-item>

        <q-expansion-item expand-separator icon="segment" label="Áreas">
          <q-card>
            <q-card-section>
              <EssentialLink
                v-for="link in essentialLinks"
                :key="link.title"
                :router="link.router"
                :title="link.title"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-item clickable to="">
          <q-item-section avatar>
            <q-icon name="event" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Eventos</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-item clickable to="">
        <q-item-section avatar>
          <q-icon name="feedback" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Sobre Nosotros</q-item-label>
        </q-item-section>
      </q-item>

      <q-item clickable to="">
        <q-item-section avatar>
          <q-icon name="contact_page" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Contáctenos</q-item-label>
        </q-item-section>
      </q-item>
    </q-drawer>
    <q-page-container>
      <router-view />
      <div class="bg-secondary q-pa-sm">
        <div class="text-center q-pb-sm">
          <div class="text-subtitle1">Síguenos</div>
          <div class="q-gutter-md" style="font-size: 2em">
            <img
              alt="Quasar logo"
              src="../assets/facebook_icon-icons.svg"
              style="width: 32px; height: 32px>"
              class="icon-redes"
            />

            <img
              alt="Quasar logo"
              src="../assets/youtube.png"
              style="width: 32px; height: 32px"
              class="icon-redes"
            />

            <img
              clickable
              alt="Quasar logo"
              src="../assets/instagram.png"
              style="width: 32px; height: 32px"
              class="icon-redes"
            />
          </div>
        </div>
        <div class="text-center">
          © 2022 Ministerio Proclaim Cuba. Todos los derechos reservados
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {
    title: "Bellas",
    icon: "school",
    router: "bellas",
  },
  {
    title: "Jóvenes Radicales",
    icon: "code",
    router: "jovenesradicales",
  },
  {
    title: "Arte con Propósito",
    icon: "chat",
    router: "arteproposito",
  },
  {
    title: "Campamentos",
    icon: "record_voice_over",
    router: "campamentos",
  },
  {
    title: "Ministerio de Adoración",
    icon: "rss_feed",
    router: "ministerioadoracion",
  },
  {
    title: "Cruzadas",
    icon: "public",
    router: "cruzadas",
  },
  {
    title: "Audiovisuales",
    icon: "favorite",
    router: "audiovisuales",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>

<style lang="sass" scoped>
.icon-redes
  cursor: pointer
</style>
