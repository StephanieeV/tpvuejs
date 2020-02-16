<template>
  <div>
    <v-bottom-navigation :value="activeBtn" color="primary" horizontal>
      <v-btn>
        <span>
          <a v-bind:href="'/#/'">Retourner à l'accueil</a>
        </span>
      </v-btn>
    </v-bottom-navigation>

    <v-card class="mx-auto" max-width="400">
      <a v-bind:href="shared_data.movies[$route.params.var - 1].url">
        <img v-bind:src="shared_data.movies[$route.params.var - 1].url" style="width:100px" />
      </a>
      <v-card-title>{{ shared_data.movies[$route.params.var - 1].titre }}</v-card-title>

      <v-card-subtitle class="pb-0">{{ shared_data.movies[$route.params.var - 1].annee }}</v-card-subtitle>

      <v-card-text class="text--primary">
        <h2>Détails:</h2>
        <br />
        Résumé:
        {{ shared_data.movies[$route.params.var - 1].resume }}
        <br />
        Genre:
        {{ shared_data.movies[$route.params.var - 1].genre }}
        <br />
        <br />
        <h2>Réalisateur:</h2>
        <br />
        Nom:
        {{ shared_data.movies[$route.params.var - 1].realisateur.nom }}
        <br />
        Prenom:{{ shared_data.movies[$route.params.var - 1].realisateur.nom }}
        <br />
        Nationalité:{{ shared_data.movies[$route.params.var - 1].realisateur.nationalite }}
        <br />
        Date de naissance: {{ shared_data.movies[$route.params.var - 1].realisateur.date_de_naissance }}
      </v-card-text>

      <v-card-actions>
        <a v-bind:href="'/#/movie/'+$route.params.var+'/edit'">
          <v-btn class="button">Modifier la fiche du film</v-btn>
        </a>
      </v-card-actions>
      <v-card-text class="text--primary">
        <h2>Notation</h2>
        <br />
        <p v-if="shared_data.movies[$route.params.var - 1].notation.note">
          Note:
          {{ shared_data.movies[$route.params.var - 1].notation.note }}
          <br />
          Commentaire: {{ shared_data.movies[$route.params.var - 1].notation.commentaire }}
          <br />
        </p>
        <p v-else>
          <a v-bind:href="'/#/movie/'+$route.params.var+'/notation'">
            <v-btn class="button">Noter ce film</v-btn>
          </a>
        </p>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <Delete></Delete>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import Delete from "./Delete.vue";
export default {
  name: "Movie",
  components: {
    Delete
  },
  data() {
    return {
      shared_data: window.shared_data,
      link: "/#/movie/",
      linkk: "/edit"
    };
  },
  methods: {
    afficher_infos: function(i) {
      this.shared_data.movies[i].display = true;
    }
  }
};
</script>

<style>
div {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 10px;
}
.button {
  margin: 10px;
}
</style>
