<template>
  <div>
    <!-- <select>
      <option v-for="m in shared_data.movies" :key="m.titre">{{
        m.titre
      }}</option>
    </!-->

    <router-link :to="{name: 'accueil'}">
      <v-btn v-on:click="suppFilm">Supprimer ce film</v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Delete",
  data() {
    return {
      shared_data: window.shared_data
    };
  },
  methods: {
    suppFilm: function() {
      this.shared_data.movies.splice(this.$route.params.var - 1, 1);
    }
  }
};
</script>
