<template>
  <div>
    <select>
      <option>Amour</option>
      <option>Autre...</option>
    </select>
    <button v-on:click="addNote">Noter ce film</button>
  </div>
</template>

<script>
export default {
  name: "Rating",
  data() {
    return {
      shared_data: window.shared_data
    };
  },
  methods: {
    addNote: function() {
      this.shared_data.movies.push(this.index, 1);
    }
  }
};
</script>
