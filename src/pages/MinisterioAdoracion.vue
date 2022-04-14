<template>
  <q-page class="column justify-between" padding>
    <div class="container-inf q-ma-sm">
      <div class="text-h3 text-weight-light">Ministerio Adoración</div>
      <div class="text-body2 q-pa-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
        perspiciatis neque ab voluptatibus inventore dolorum deleniti, ratione
        voluptate mollitia impedit, optio voluptates, cupiditate fugiat facilis
        omnis aut vitae! Doloribus, quam. Id reiciendis modi aliquam sit enim
        doloribus aliquid illo, ad dicta. Facere ad at iure pariatur error
        inventore perspiciatis ducimus sed est mollitia, ex ipsum eligendi quos
        libero quasi neque. Quae, officia totam? Ut aspernatur, impedit ullam ad
        esse id recusandae eligendi, nemo quasi expedita maiores facere velit
        placeat numquam culpa totam amet itaque earum aperiam maxime explicabo.
        Saepe, ipsum? Eum, quidem neque vitae animi perspiciatis, nesciunt dicta
        sapiente obcaecati iusto dolorum labore? Quidem, repudiandae
        dignissimos, sed perferendis eum asperiores minus eligendi iure, ratione
        assumenda impedit voluptatum placeat officia ipsam. Voluptate,
        laboriosam aliquid. Consectetur, ducimus culpa, eum vel asperiores
        exercitationem doloremque ea corporis excepturi distinctio provident
        sapiente quos id eius, facere dolorem laboriosam consequuntur incidunt
        quia perspiciatis. Distinctio, cumque labore! Quis quisquam autem
        tenetur itaque saepe cupiditate, deserunt quaerat nihil praesentium
        deleniti repellendus consequatur? Veritatis amet debitis doloribus nihil
        praesentium veniam ullam? Suscipit quisquam perspiciatis unde quaerat
        asperiores illo eligendi!
      </div>
    </div>

    <div class="conteiner-video">
      <div class="fit row wrap justify-evenly items-start content-start">
        <div v-if="loading" class="container-span column justify-center">
          <span>
            <q-spinner color="primary" size="3em" />
          </span>
        </div>
        <template v-else>
          <q-card class="my-card" v-for="v in videos" :key="v.id.videoId">
            <q-video :ratio="16 / 9" :src="v.snippet.url" />

            <q-card-section>
              <div class="text-subtitle1">{{ v.snippet.title }}</div>
            </q-card-section>
          </q-card>
        </template>
      </div>
      <div class="flex justify-center q-mt-md">
        <q-btn
          class="q-mr-md"
          color="primary"
          flat
          icon="home"
          @click="getVideo(listaoneplus)"
        />
        <q-btn
          color="primary"
          :disable="tokenback ? false : true"
          flat
          icon="arrow_back_ios"
          @click="backVideo(listaoneplus)"
        />
        <q-btn
          :disable="tokennext ? false : true"
          size="md"
          color="primary"
          flat
          icon-right="arrow_forward_ios"
          @click="nextVideo(listaoneplus)"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";
import useAreas from "../Composables/UseAreas";

export default defineComponent({
  name: "BellasPage",

  setup() {
    const {
      getVideo,
      nextVideo,
      backVideo,
      videos,
      tokennext,
      tokenback,
      loading,
    } = useAreas();
    const $q = useQuasar();
    const listaoneplus = "PLvwA643Oh7hqSouP6OkOSvOkns9ADrvfw";

    getVideo(listaoneplus);

    return {
      videos,
      tokennext,
      tokenback,
      listaoneplus,
      loading,
      getVideo,
      nextVideo,
      backVideo,
    };
  },
});
</script>

<style lang="sass" scoped>
.conteiner-video
  padding: 0px 0px

.my-card
  width: 100%
  max-width: 250px
  height: 250px
  margin: 10px

.container-span
  height: 250px
</style>
