<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
// import VueRouter from "vue-router";
// const routes = [{ path: "/films", component: movieitem }];
// const router = new VueRouter({
//   routes
// });
// const app = new Vue({
//   el: "#app",
//   router
// });

export default {
  name: "App",

  data() {
    return {
      message: "Voici la liste des films !",
      shared_data: window.shared_data
    };
  },
  methods: {
    ajouterFilm: function() {
      this.shared_data.movies.push({
        titre: this.titre,
        annee: this.annee,
        realisateur: this.realisateur,
        resume: this.resume,
        url: this.url,
        display: this.display,
        num: this.shared_data.movies.length + 1
      });
    },
    suppFilm: function() {
      this.movies.splice(this.index, 1);
    },
    afficher_infos: function(i) {
      this.movies[i].display = true;
    }
  },
  computed: {
    firstLetter: function() {
      return this.message[0];
    },
    compter: function() {
      return this.movies.length;
    },

    trierAnnee: function() {
      return this.movies.filter(m => {
        return m.annee == this.champ_tri;
      });
    },
    trierTitre: function() {
      return this.movies.filter(m => {
        return m.titre == this.champ_tri;
      });
    },
    trierRealisateur: function() {
      return this.movies.filter(m => {
        return m.realisateur == this.champ_tri;
      });
    }
  }
};
</script>

<style></style>
