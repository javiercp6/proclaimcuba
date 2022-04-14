import { boot } from "quasar/wrappers";
import axios from "axios";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
//'https://youtube.googleapis.com/youtube/v3/search?channelId=UCok_yhjwg4WSx3s_2Yh8ZjQ&maxResults=9&order=date&key=[YOUR_API_KEY]'

//topes de gama
const listaaple = "PLvwA643Oh7hoyuFWMiUFvdYeSLlXEx5oR";
const listaportatiles = "PLvwA643Oh7ho9WluliK4PCwrLK8zDoXbf";
const listaoppo = "PLvwA643Oh7hqp2krlIow8Yw-okVCPH_fL";
const listaxiaomi = "PLvwA643Oh7hquYomYEJufjMf7cmLC38I6";
const listasony = "PLvwA643Oh7hp8L-O1BI9eg03oh-soDm3M";
const listaoneplus = "PLvwA643Oh7hqSouP6OkOSvOkns9ADrvfw";

const key = "AIzaSyBuFo5lhz_VyEbm6MPgcFsiHvOlFIQO5wI";
const key2 = "AIzaSyA8dMt1KRZwipd-dMFdd5Gk3X-tEtQNBHw";
const idchanel2 = "UCyXVhjDp_LwGJMIWFNAHnbA";
const idchanel = "UCok_yhjwg4WSx3s_2Yh8ZjQ";
const canalmio = "UCpDmV9zSTAsiCj6L8OHxiiA";
const playlistId = "PLqQi7Bq3IS2ZX33DO8CAIo2CBixL16mE5";
const api = axios.create({
  //baseURL: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${idchanel}&maxResults=8&order=date&playlistId=${listaoneplus}&key=${key2}`,
  //baseURL: `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${listaxiaomi}&maxResults=8&order=date&key=${key2}`,
  baseURL: "https://www.googleapis.com/youtube/v3/",
  /* headers: {
    "content-type": "application/json",
    "Acces-Control-Allow-Origin": "*",
  }, */
});

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
