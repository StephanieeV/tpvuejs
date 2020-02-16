<template>
  <div>
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
    <button v-on:click="editMovie">Modifier la fiche du film</button>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      shared_data: window.shared_data
    };
  },
  methods: {
    editMovie: function() {
      this.shared_data.movies.push({
        titre: this.titre,
        annee: this.annee,
        realisateur: this.realisateur,
        resume: this.resume,
        url: this.url,
        display: this.display,
        num: this.shared_data.movies.length + 1
      });
    }
  }
};
</script>
