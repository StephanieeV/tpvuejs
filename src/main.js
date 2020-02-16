import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import App from "./App.vue";
import VueRouter from "vue-router";
import Edit from "./components/Edit.vue";
import Movie from "./components/Movie.vue";
import Rating from "./components/Rating.vue";
import MoviesList from "./components/MoviesList.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuetify);

const routes = [
  { path: "/", component: MoviesList, name: "accueil" },
  { path: "/movie/:var/edit", component: Edit, name: "editer" },
  { path: "/movie/:var", name: "details", component: Movie },
  { path: "/movie/:var/notation", name: "notation", component: Rating }
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
      display: false,
      notation: {
        note: "3",
        commentaire: ""
      }
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
      resume: "avatar monde parallele",
      genre: "Historique",
      url: "",
      display: false,
      notation: {
        note: "",
        commentaire: ""
      }
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
      genre: "Historique",
      resume: "soupe et homme de l'espace",
      url:
        "http://fr.web.img2.acsta.net/medias/nmedia/18/36/11/21/18478117.jpg",
      display: false,
      notation: {
        note: "",
        commentaire: ""
      }
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
  notation: {
    note: "",
    commentaire: ""
  },
  display: false,
  tri_annee: "",
  champ_tri: ""
};

new Vue({
  router: router,
  render: h => h(App)
}).$mount("#app");
