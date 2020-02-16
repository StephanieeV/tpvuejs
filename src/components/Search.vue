<template>
  <div>
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <label>Rechercher des films par année, titre ou realisateur</label>
            <br />
            <v-text-field type="text" label="Rechercher un film !" v-model="champ_tri"></v-text-field>
            <ul>
              <li v-for="n in trie" :key="n.num">
                <a v-bind:href="'/#/movie/'+n.num">{{ n.titre }} - {{ n.annee }}</a>
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      shared_data: window.shared_data,

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
