<template>
  <div>
    Titre: {{ shared_data.movies[$route.params.var - 1].titre }} - Année de
    sortie:
    {{ shared_data.movies[$route.params.var - 1].annee }}
    <br />
    Détails: Réalisateur:
    {{ shared_data.movies[$route.params.var - 1].realisateur }}
    - Résumé:
    {{ shared_data.movies[$route.params.var - 1].resume }} - Poster:
    <!-- <a v-bind:href="shared_data.movies.url">Lien vers le poster</a> -->
    <Delete></Delete>
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
      shared_data: window.shared_data
    };
  },
  methods: {
    afficher_infos: function(i) {
      this.shared_data.movies[i].display = true;
    }
  }
};
</script>
