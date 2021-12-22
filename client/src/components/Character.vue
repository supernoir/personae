<template>
  <div class="container-md">
        <div id="error" v-if="failed">{{ error }}</div>
    <div class="card">
      <div class="card-header text-end"><a href="#">Settings</a></div>
  <div class="card-body">
    <Avatar />
    <h5 class="card-title">Firstname Lastname</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush text-start" v-for="character of dataset" :key="character.id">
      <li class="list-group-item">
        <span class="text-muted">Nationality</span> {{ character.nationality }}
      </li>
      <li class="list-group-item"><span class="text-muted">Age</span> {{ character.age }}</li>
      <li class="list-group-item">
        <span class="text-muted">Sexuality</span> {{ character.sexuality }}
      </li>
      <li class="list-group-item">
        <span class="text-muted">Gender</span>
        {{ character.gender.description }} / {{ character.gender.identifier }}
      </li>
      <li class="list-group-item">
        <span class="text-muted">Profession</span> {{ character.profession }}
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
import Avatar from "./Avatar.vue";

export default {
  components: { Avatar },
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

#error {
  background: #993333;
  color: white;
  padding: 10px;
}
</style>
