<template>
  <div>
    <v-bottom-navigation :value="activeBtn" color="primary" horizontal>
      <v-btn>
        <span>
          <a v-bind:href="'/#/'">Accueil</a>
        </span>
      </v-btn>
    </v-bottom-navigation>
    <h2>{{ message }}</h2>
    <hr />
    <Search></Search>
    <hr />

    <div v-for="(m) in shared_data.movies" :key="m.num">
      <v-card class="mx-auto" max-width="400">
        <!-- <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >-->
        <span v-if="m.url">
          <img v-bind:src="m.url" style="width:100px" />
        </span>
        <v-card-title>
          <a v-bind:href="'/#/movie/'+m.num">{{ m.titre }}</a>
        </v-card-title>
        <!-- </v-img> -->

        <v-card-subtitle class="pb-0">{{ m.annee }}</v-card-subtitle>

        <v-card-text class="text--primary">
          Langue: {{ m.langue }}
          <br />
          Genre: {{m.genre}}
          <br />
          Réalisateur: {{ m.realisateur.nom }} {{ m.realisateur.prenom }}
        </v-card-text>

        <v-card-actions>
          <a v-bind:href="'/#/movie/'+m.num">
            <v-btn class="button">Détails</v-btn>
          </a>
        </v-card-actions>
      </v-card>
    </div>

    <hr />
    <Add></Add>
  </div>
</template>

<script>
import Search from "./Search.vue";
import Add from "./Add.vue";

export default {
  name: "MoviesList",
  components: {
    Search,
    Add
  },
  data() {
    return {
      shared_data: window.shared_data,
      message: "Voici la liste des films !",
      link: "/#/movie/",
      tri_annee: "",
      champ_tri: ""
    };
  },
  methods: {
    afficher_infos: function(i) {
      this.shared_data.movies[i].display = true;
    }
  },
  computed: {
    compter: function() {
      return this.shared_data.movies.length;
    }
  }
};
</script>
<style>
div {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
input {
  border: darkgray;
}
</style>