import { api } from "src/boot/axios";
import { ref } from "vue";

const useAreas = () => {
  const videos = ref(null);
  const tokennext = ref(null);
  const tokenback = ref(null);
  const loading = ref(true);

  const getVideo = async (listaRep) => {
    loading.value = true;
    await api
      .get(
        `playlistItems?part=snippet&playlistId=${listaRep}&maxResults=4&order=date&key=AIzaSyA8dMt1KRZwipd-dMFdd5Gk3X-tEtQNBHw`
      )
      .then((response) => {
        videos.value = response.data.items;
        videos.value.forEach((element) => {
          element.snippet.url = `https://www.youtube.com/embed/${element.snippet.resourceId.videoId}?rel=0`;
        });

        if (response.data.nextPageToken) {
          console.log("next token");
          tokennext.value = response.data.nextPageToken;
          console.log(tokennext);
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

        console.log(videos);
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
    loading.value = false;
  };

  const nextVideo = async (listaRep) => {
    loading.value = true;
    await api
      .get(
        `playlistItems?part=snippet&playlistId=${listaRep}&maxResults=4&order=date&pageToken=${tokennext.value}&key=AIzaSyA8dMt1KRZwipd-dMFdd5Gk3X-tEtQNBHw`
      )
      .then((response) => {
        videos.value = response.data.items;
        videos.value.forEach((element) => {
          element.snippet.url = `https://www.youtube.com/embed/${element.snippet.resourceId.videoId}?rel=0`;
        });

        if (response.data.nextPageToken) {
          console.log("next token");
          tokennext.value = response.data.nextPageToken;
          console.log(tokennext);
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

        console.log(videos);
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
    loading.value = false;
  };

  const backVideo = async (listaRep) => {
    loading.value = true;
    await api
      .get(
        `playlistItems?part=snippet&playlistId=${listaRep}&maxResults=4&order=date&pageToken=${tokenback.value}&key=AIzaSyA8dMt1KRZwipd-dMFdd5Gk3X-tEtQNBHw`
      )
      .then((response) => {
        videos.value = response.data.items;
        videos.value.forEach((element) => {
          element.snippet.url = `https://www.youtube.com/embed/${element.snippet.resourceId.videoId}?rel=0`;
        });
        loading.value = false;
        if (response.data.nextPageToken) {
          console.log("next token");
          tokennext.value = response.data.nextPageToken;
          console.log(tokennext);
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

        console.log(videos);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
        loading.value = false;
        $q.notify({
          color: "negative",
          position: "top",
          message: "Loading failed",
          icon: "report_problem",
        });
      });
    loading.value = false;
  };

  return {
    videos,
    tokennext,
    tokenback,
    loading,
    getVideo,
    nextVideo,
    backVideo,
  };
};

export default useAreas;
