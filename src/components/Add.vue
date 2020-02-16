<template>
  <div>
    <label>Titre</label>
    <input v-model="movie.titre" />
    <br />
    <label>Année</label>
    <input v-model="movie.annee" />
    <br />
    <label>Langue</label>
    <input v-model="movie.langue" />
    <br />
    <label>Realisateur</label>
    <br />
    <label>Nom</label>
    <input v-model="movie.realisateur.nom" />
    <label>Prenom</label>
    <input v-model="movie.realisateur.prenom" />
    <label>Nationalité</label>
    <input v-model="movie.realisateur.nationalite" />
    <label>Date de naissance</label>
    <input v-model="movie.realisateur.date_de_naissance" />
    <br />
    <label>Resumé</label>
    <input v-model="movie.resume" />
    <br />
    <label>Url du poster</label>
    <input v-model="movie.url" />
    <br />
    <a href="/">
      <button v-on:click="ajouterFilm">Ajouter un film</button>
    </a>
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
        tri_annee: "",
        champ_tri: ""
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
      return this.shared_data.movies.length;
    }
  }
};
</script>
