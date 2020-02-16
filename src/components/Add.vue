<template>
  <div>
    <h2>Ajouter un film</h2>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <h3>Film</h3>
            <v-text-field v-model="movie.titre" label="Titre"></v-text-field>
            <v-text-field v-model="movie.annee" label="Année"></v-text-field>
            <v-text-field v-model="movie.url" label="Url du poster"></v-text-field>
            <v-text-field v-model="movie.resume" label="Résumé"></v-text-field>
            <v-text-field v-model="movie.genre" label="Genre"></v-text-field>
            <v-text-field v-model="movie.langue" label="Langue"></v-text-field>

            <h3>Realisateur</h3>
            <v-text-field v-model="movie.realisateur.nom" label="Nom"></v-text-field>
            <v-text-field v-model="movie.realisateur.prenom" label="Prenom"></v-text-field>
            <v-text-field v-model="movie.realisateur.nationalite" label="Nationalité"></v-text-field>
            <v-text-field v-model="movie.realisateur.date_de_naissance" label="Date de naissance"></v-text-field>
          </v-col>
        </v-row>
        <v-btn v-on:click="ajouterFilm">Ajouter un film</v-btn>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Add",
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
    ajouterFilm: function() {
      this.shared_data.movies.push(this.movie);
    }
  },
  computed: {
    num: function() {
      return this.shared_data.movies.length + 1;
    }
  }
};
</script>
