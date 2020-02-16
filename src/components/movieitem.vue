<template>
  <div>
    <br />
    <label>Titre</label>
    <input v-model="titre" />
    <br />
    <label>Année</label>
    <input v-model="annee" />
    <br />
    <label>Realisateur</label>
    <input v-model="realisateur" />
    <br />
    <label>Resumé</label>
    <input v-model="resume" />
    <br />
    <label>Url du poster</label>
    <input v-model="url" />
    <br />
    <button v-on:click="ajouterFilm">ajouter un film</button>
    <br />

    <br />
  </div>
</template>

<script>
export default {
  name: "movie-item",
  data() {
    return {
      message: "voici un test",
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
      this.shared_data.movies.splice(this.index, 1);
    },
    afficher_infos: function(i) {
      this.shared_data.movies[i].display = true;
    }
  },
  computed: {
    compter: function() {
      return this.shared_data.movies.length;
    },
    trie: function() {
      return this.shared_data.movies.filter(m => {
        return (
          (m.annee == this.champ_tri) |
          (m.titre ==
            this.champ_tri) /*|
          (m.realisateur == this.champ_tri)*/
        );
      });
    }
  }
};
</script>
