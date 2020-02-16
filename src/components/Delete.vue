<template>
  <div>
    <!-- <select>
      <option v-for="m in shared_data.movies" :key="m.titre">{{
        m.titre
      }}</option>
    </!-->

    <router-link :to="{name: 'accueil'}">
      <button v-on:click="suppFilm">Supprimer ce film</button>
    </router-link>

    <router-link
      :to="{name: 'product-delete', params: {product_id: this.shared_data.movies.num}}"
    >Delete</router-link>
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
      //   this.shared_data.movies.splice(this.index, 1);
      //   this.$route.params.product_id
      // this.shared_data.movies.splice(this.$route.params.var, 1);
      this.shared_data.movies.splice(this.$route.params.product_id, 1);
    }
  }
};
</script>
