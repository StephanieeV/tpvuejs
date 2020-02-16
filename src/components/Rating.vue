<template>
  <div>
    <v-bottom-navigation :value="activeBtn" color="primary" horizontal>
      <v-btn>
        <span>
          <a v-bind:href="'/#/'">Retourner à l'accueil</a>
        </span>
      </v-btn>
      <v-btn>
        <span>
          <a v-bind:href="'/#/movie/'+m.num">Retourner sur le film</a>
        </span>
      </v-btn>
    </v-bottom-navigation>
    <h1>Noter ce film</h1>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field v-model="movie.note" label="Note"></v-text-field>
            <v-text-field v-model="movie.commentaire" label="Commentaire"></v-text-field>
            <a v-bind:href="'/#/movie/'+$route.params.var">
              <v-btn v-on:click="ajouterNotation">Valider</v-btn>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Rating",
  data() {
    return {
      shared_data: window.shared_data,
      movie: {
        num: this.num,
        titre: "",
        annee: "",
        langue: "",
        realisateur: {
          nom: "",
          prenom: "",
          nationalite: "",
          date_de_naissance: ""
        },
        resume: "",
        url: "",
        genre: "",
        display: false,
        notation: {
          note: "",
          commentaire: ""
        }
      }
    };
  },
  methods: {
    ajouterNotation: function() {
      this.shared_data.movies.push(this.movie);
    }
  }
};
</script>
