<template>
  <div>
    <h2>{{ message }}</h2>

    <!-- <span v-on="compter">Il y a {{ compter }} films enregistrés.</!-->

    <hr />
    <Search></Search>
    <hr />

    <ul>
      <li v-for="(m, i) in shared_data.movies" :key="m.num">
        <img v-bind:src="m.url" style="width:100px" />
        <span
          v-on:click="afficher_infos(i)"
        >{{ m.num }} - Titre: {{ m.titre }} - Année de sortie: {{ m.annee }}</span>
        <br />
        <router-link to="/movie/:var">
          <button>Détails</button>
        </router-link>
        <router-link to="/movie/3">
          <button>Détailllllls</button>
        </router-link>
        <router-link to="{ path: '/movie/:var', params: { var: 1 }}">CLICK</router-link>

        <span v-if="m.display">
          <u>Détails:</u>
          <br />
          Langue: {{ m.langue }} - Genre: {{m.genre}} -
          Résumé: {{ m.resume }} - Poster:
          <a
            v-bind:href="m.url"
          >Lien vers le poster</a>
          -
          Réalisateur:
          - Nom: {{ m.realisateur.nom }}
          - Prenom: {{ m.realisateur.prenom }}
          - Nationalité: {{ m.realisateur.nationalite }}
          - Date de naissance: {{ m.realisateur.date_de_naissance }}
        </span>
      </li>
    </ul>
    <router-link to="/add">
      <button>Ajouter un film à la liste</button>
    </router-link>
  </div>
</template>

<script>
import Search from "./Search.vue";
export default {
  name: "MoviesList",
  components: {
    Search
  },
  data() {
    return {
      shared_data: window.shared_data,
      message: "Voici la liste des films !",

      tri_annee: "",
      champ_tri: ""
    };
  },
  methods: {
    afficher_infos: function(i) {
      this.shared_data.movies[i].display = true;
    }
  },
  computed: {
    compter: function() {
      return this.shared_data.movies.length;
    }
  }
};
</script>
