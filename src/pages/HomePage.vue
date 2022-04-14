<template>
  <q-page>
    <q-carousel
      v-model="slide"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      control-color="white"
      navigation
      padding
      arrows
      :autoplay="autoplay"
      height="calc(100vh - 50px)"
      class="bg-secondary text-white shadow-1 rounded-borders"
    >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-icon name="style" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="tv" class="column no-wrap flex-center">
        <q-icon name="live_tv" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="layers" class="column no-wrap flex-center">
        <q-icon name="layers" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
      <q-carousel-slide name="map" class="column no-wrap flex-center">
        <q-icon name="terrain" size="56px" />
        <div class="q-mt-md text-center">
          {{ lorem }}
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="row">
      <div class="col col-xs-12 col-sm-6 row items-center">
        <div class="title-index q-pa-lg">
          <div class="text-h2">Título</div>
          <div class="text-body2 q-pa-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi
            perspiciatis neque ab voluptatibus inventore dolorum deleniti,
            ratione voluptate mollitia impedit, optio voluptates, cupiditate
            fugiat facilis omnis aut vitae! Doloribus, quam. Id reiciendis modi
            aliquam sit enim doloribus aliquid illo, ad dicta. Facere ad at iure
            pariatur error inventore perspiciatis ducimus sed est mollitia, ex
            ipsum eligendi quos libero quasi neque. Quae, officia totam? Ut
            aspernatur, impedit ullam ad esse id recusandae eligendi, nemo quasi
            expedita maiores facere velit placeat numquam culpa totam amet
            itaque earum aperiam maxime explicabo. Saepe, ipsum? Eum, quidem
          </div>
        </div>
      </div>
      <div class="col col-xs-12 col-sm-6 flex flex-center">
        <img src="../assets/iglesia.png" class="asset1" alt="" />
      </div>
    </div>

    <div class="seccion seccion-card bg-teal-2 row justify-center">
      <div class="q-pt-sm row justify-center">
        <q-card v-for="(area, index) in areas" :key="index" class="my-card">
          <q-img :id="area.title" :src="area.img">
            <div class="absolute-bottom text-h6">{{ area.title }}</div>
          </q-img>

          <q-card-section>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            voluptatem totam
            <div class="row justify-end">
              <q-btn
                flat
                rounded
                color="primary"
                label="Ver más"
                :to="area.router"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div>
      <div class="container-text q-pa-lg">
        <div class="text-h2 text-center">Título</div>
        <div class="text-body2 text-center q-pa-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          aut officia sint ut a harum soluta, ex natus perspiciatis incidunt
          laboriosam minima debitis laborum dicta delectus voluptas mollitia
          quam. Quasi. Assumenda neque iste veritatis consequuntur autem amet,
          dolore laudantium eius accusantium laboriosam optio aliquam beatae
          soluta ab ad reprehenderit dolorum adipisci illo ex nemo eos? Eligendi
          vel accusamus fugit aperiam? Non laboriosam harum quisquam labore
          magnam nam laudantium quibusdam impedit fugit sequi veritatis ad enim
          optio alias porro expedita deleniti, voluptate maxime adipisci nulla.
          Quo quis vel voluptatum amet ipsam! Laudantium voluptates labore error
          iusto corrupti quaerat reprehenderit aliquam, non sunt in. Aspernatur
          amet non quidem voluptas quo sapiente nemo possimus rem iusto ratione
          unde laboriosam placeat, iure nobis aperiam. Cupiditate expedita,
          beatae odit voluptatum aspernatur similique dignissimos quas aliquam
          deserunt labore nisi commodi explicabo blanditiis dolorum quia velit
          officiis est neque tenetur dolor placeat ab quidem vel? Porro, magnam.
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

const listareas = [
  {
    title: "Bellas",
    img: "photo/bellas2.jpg",
    router: "bellas",
  },
  {
    title: "Jóvenes Radicales",
    img: "photo/bellas2.jpg",
    router: "jovenesradicales",
  },
  {
    title: "Arte de Propósito",
    img: "photo/bellas2.jpg",
    router: "arteproposito",
  },
  {
    title: "Campamentos",
    img: "photo/bellas2.jpg",
    router: "campamentos",
  },
  {
    title: "Ministerio de Adoración",
    img: "photo/bellas2.jpg",
    router: "ministerioadoracion",
  },
  {
    title: "Cruzadas",
    img: "photo/bellas2.jpg",
    router: "cruzadas",
  },
  {
    title: "Audiovisuales",
    img: "photo/bellas2.jpg",
    router: "audiovisuales",
  },
];

export default defineComponent({
  name: "HomePage",
  setup() {
    const areas = ref(listareas);
    return {
      slide: ref("style"),
      autoplay: ref(true),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.",
      areas,
    };
  },
});
</script>

<style lang="sass" scoped>
.rounded-borders
  border-radius: 0px



.asset1
  width: 500px

.seccion-card
  padding: 0px 60px

.my-card
  width: 100%
  max-width: 200px
  height: 100%
  max-height: 400px
  margin: 20px
  border-radius: 10px



@media (max-width: $breakpoint-xs-max)
  .seccion-card
    padding: 0px 0px
</style>
