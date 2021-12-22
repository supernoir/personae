<template>
  <div class="container-md">
        <div id="error" v-if="failed">{{ error }}</div>
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">Firstname Lastname</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush" v-for="character of dataset" :key="character.id">
      <li class="list-group-item">
        <span class="highlight">Nationality</span> {{ character.nationality }}
      </li>
      <li class="list-group-item"><span class="highlight">Age</span> {{ character.age }}</li>
      <li class="list-group-item">
        <span class="highlight">Sexuality</span> {{ character.sexuality }}
      </li>
      <li class="list-group-item">
        <span class="highlight">Gender</span>
        {{ character.gender.description }} / {{ character.gender.identifier }}
      </li>
      <li class="list-group-item">
        <span class="highlight">Profession</span> {{ character.profession }}
      </li>
    </ul>
  <div class="card-body">
    <button type="button" class="btn btn-primary" v-on:click="regenerate">Generate new persona</button>
  </div>
</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    fetchData() {
      axios
        .get("http://localhost:8081/personae/random")
        .then((response) => {
          this.dataset = [
            {
              nationality: response.data.persona.nationality,
              age: response.data.persona.age,
              sexuality: response.data.persona.sexuality,
              profession: response.data.persona.profession,
              gender: {
                description:
                  response.data.persona.gender.weighted.description,
                identifier: response.data.persona.gender.weighted.identifier,
              },
            },
          ];
          this.failed = false;
        })
        .catch((err) => {
          this.error = err;
          this.failed = true;
        });
    },
     regenerate() {
    this.fetchData();
  },
  },
  data() {
    return {
      dataset: [],
      error: String,
      failed: Boolean,
    };
  },
  mounted() {
    this.fetchData();
  }

};
</script>

<style scoped>
/* ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f1f1f1;
  padding: 10px 10px 10px 10px;
  margin: 0 0 10px 0;
}*/
.highlight {
  font-weight: bold;
}

#error {
  background: #993333;
  color: white;
  padding: 10px;
}

#regenerate {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight:bold;
  font-size: 1.2em;
    background: #339999;
    color: white;
    padding: 6px 12px;
    border: 0px;
    border-radius: 4px;
}
button#regenerate:hover {
        background: #006666;
        cursor: pointer;
}
</style>
