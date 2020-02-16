<template>
  <div>
    <label>Rechercher des films par année, titre ou realisateur</label>
    <br />
    <input type="text" v-model="champ_tri" />
    <ul>
      <li v-for="n in trie" :key="n.num">{{ n.titre }} - {{ n.annee }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      shared_data: window.shared_data,

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
  },
  computed: {
    trie: function() {
      return this.shared_data.movies.filter(m => {
        return (
          (m.annee == this.champ_tri) |
          (m.titre == this.champ_tri) |
          (m.realisateur.nom == this.champ_tri) |
          (m.realisateur.prenom == this.champ_tri)
        );
      });
    }
  }
};
</script>
