<template>
  <q-page class="conteiner-video">
    <div class="fit row wrap justify-evenly items-start content-start">
      <q-card class="my-card" v-for="video in data" :key="video.id.videoId">
        <q-video :ratio="16 / 9" :src="video.snippet.url" />

        <q-card-section>
          <div class="text-h6">{{ video.snippet.title }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="flex justify-center q-mt-md">
      <q-btn class="q-mr-md" color="primary" flat icon="home" />
      <q-btn
        color="primary"
        :disable="tokenback ? false : true"
        flat
        icon="arrow_back_ios"
        @click="backData"
      />
      <q-btn
        :disable="tokennext ? false : true"
        size="md"
        color="primary"
        flat
        icon-right="arrow_forward_ios"
        @click="nextData"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { api } from "boot/axios";
import axios from "axios";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "IndexPage",

  setup() {
    const $q = useQuasar();
    const data = ref(null);
    const tokennext = ref(null);
    const tokenback = ref(null);
    function loadData() {
      console.log("video");
      api
        .get()
        .then((response) => {
          data.value = response.data.items;
          data.value.forEach((element) => {
            element.snippet.url = `https://www.youtube.com/embed/${element.snippet.resourceId.videoId}?rel=0`;
          });

          if (response.data.nextPageToken) {
            console.log("next token");
            tokennext.value = response.data.nextPageToken;
            console.log(tokennext.value);
          } else {
            tokennext.value = null;
          }
          if (response.data.prevPageToken) {
            console.log("back token");
            tokenback.value = response.data.prevPageToken;
          } else {
            console.log(" no existe back token");
            tokenback.value = null;
          }

          console.log(data.value);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response.data);
          $q.notify({
            color: "negative",
            position: "top",
            message: "Loading failed",
            icon: "report_problem",
          });
        });
    }

    function nextData() {
      console.log("next video");
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCok_yhjwg4WSx3s_2Yh8ZjQ&maxResults=8&order=date&pageToken=${tokennext.value}&key=AIzaSyBuFo5lhz_VyEbm6MPgcFsiHvOlFIQO5wI`
        )
        .then((response) => {
          data.value = response.data.items;
          data.value.forEach((element) => {
            element.snippet.url = `https://www.youtube.com/embed/${element.id.videoId}?rel=0`;
          });
          if (response.data.nextPageToken) {
            tokennext.value = response.data.nextPageToken;
          } else {
            tokennext.value = null;
          }
          if (response.data.prevPageToken) {
            tokenback.value = response.data.prevPageToken;
          } else {
            tokenback.value = null;
          }
          console.log(data.value);
          console.log(response.data);
        })
        .catch(() => {
          $q.notify({
            color: "negative",
            position: "top",
            message: "Loading failed",
            icon: "report_problem",
          });
        });
    }

    function backData() {
      console.log("next video");
      axios
        .get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCok_yhjwg4WSx3s_2Yh8ZjQ&maxResults=8&order=date&pageToken=${tokenback.value}&key=AIzaSyBuFo5lhz_VyEbm6MPgcFsiHvOlFIQO5wI`
        )
        .then((response) => {
          data.value = response.data.items;
          data.value.forEach((element) => {
            element.snippet.url = `https://www.youtube.com/embed/${element.id.videoId}?rel=0`;
          });

          if (response.data.nextPageToken) {
            tokennext.value = response.data.nextPageToken;
          } else {
            tokennext.value = null;
          }
          if (response.data.prevPageToken) {
            tokenback.value = response.data.prevPageToken;
          } else {
            tokenback.value = null;
          }

          console.log(data.value);
          console.log(response.data);
        })
        .catch(() => {
          $q.notify({
            color: "negative",
            position: "top",
            message: "Loading failed",
            icon: "report_problem",
          });
        });
    }

    loadData();

    return {
      /* axios.get(&#39;http://localhost/impcargo/impcargo/api.php&#39;, {
        params: {
        &#39;mes&#39;: this.mes,
        &#39;idAuto&#39;: this.id
        }
        }). then(res=&gt;{ console.log(res) this.declaraciones = res.data }) */
      /* leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }, */
      data,
      nextData,
      backData,
      tokennext,
      tokenback,
    };
  },
});
</script>

<style lang="sass" scoped>
.conteiner-video
  padding: 30px 0px

.my-card
  width: 100%
  max-width: 300px
  margin: 10px
</style>
