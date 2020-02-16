import Vue from "vue";
// import Vuetify from "vuetify";
// import "vuetify/dist/vuetify.min.css";
import App from "./App.vue";
import VueRouter from "vue-router";
import Add from "./components/Add.vue";
import Edit from "./components/Edit.vue";
import Delete from "./components/Delete.vue";
import Movie from "./components/Movie.vue";
import MoviesList from "./components/MoviesList.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);
// Vue.use(Vuetify);

const routes = [
  { path: "/", component: MoviesList, name: "accueil" },
  { path: "/add", component: Add, name: "ajouter" },
  { path: "/movie/:var/edit", component: Edit, name: "editer" },
  { path: "/movie/:var", component: Movie, name: "details" },
  {
    path: "/movie/:product_id/delete",
    component: Delete,
    name: "product-delete"
  }
];

const router = new VueRouter({
  routes
});

window.shared_data = {
  message: "Voici la liste des films !",
  movies: [
    {
      num: 1,
      titre: "Titanic",
      annee: "1998",
      langue: "fr",
      realisateur: {
        nom: "truc",
        prenom: "machin",
        nationalite: "fr",
        date_de_naissance: "01/01/1918"
      },
      resume: "bateau qui coule",
      genre: "Historique",
      urll: "",
      // realisateur: "",
      display: false
    },
    {
      num: 2,
      titre: "Avatar",
      annee: "2008",
      langue: "en",
      realisateur: {
        nom: "truc",
        prenom: "machin",
        nationalite: "fr",
        date_de_naissance: "01/01/1918"
      },
      // realisateur: "",
      resume: "avatar monde parallele",
      genre: "Historique",
      url: "",
      display: false
    },
    {
      num: 3,
      titre: "La soupe aux choux",
      annee: "1975",
      langue: "fr",
      realisateur: {
        nom: "truc",
        prenom: "machin",
        nationalite: "fr",
        date_de_naissance: "01/01/1918"
      },
      // realisateur: "",
      genre: "Historique",
      resume: "soupe et homme de l'espace",
      url:
        "http://fr.web.img2.acsta.net/medias/nmedia/18/36/11/21/18478117.jpg",
      display: false
    }
  ],
  num: 0,
  titre: "",
  annee: "",
  langue: "",
  genre: "",
  realisateur: { nom: "", prenom: "", nationalite: "", date_de_naissance: "" },
  resume: "",
  url: "",
  // nom: "",
  // prenom: "",
  // nationalite: "",
  // date_de_naissance: "",
  // genre: "",
  // realisateur: "",
  display: false,
  tri_annee: "",
  champ_tri: ""
};

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
