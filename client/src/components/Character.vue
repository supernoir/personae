<template>
  <div>
    <div id="error" v-if="failed">{{ error }}</div>
    <ul v-for="character of dataset" :key="character.id">
      <li>
        <span class="highlight">Nationality</span> {{ character.nationality }}
      </li>
      <li><span class="highlight">Age</span> {{ character.age }}</li>
      <li>
        <span class="highlight">Sexuality</span> {{ character.sexuality }}
      </li>
      <li>
        <span class="highlight">Gender</span>
        {{ character.gender.description }} / {{ character.gender.identifier }}
      </li>
      <li>
        <span class="highlight">Profession</span> {{ character.profession }}
      </li>
    </ul>
    <button id="regenerate" v-on:click="regenerate">Generate new persona</button>

<!-- <svg width="100%" height="100%" viewBox="0 0 200 200" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <g transform="matrix(1,0,0,1.13617,-0.768639,-5.28781)">
        <circle cx="100.769" cy="86.157" r="54.329" id="face" />
    </g>
    <g transform="matrix(1,0,0,1,-1.25492,-1.49545)">
        <path d="M107.853,95.935C107.853,92.657 105.192,89.996 101.915,89.996L100.595,89.996C97.318,89.996 94.657,92.657 94.657,95.935L94.657,125.611C94.657,128.888 97.318,131.549 100.595,131.549L101.915,131.549C105.192,131.549 107.853,128.888 107.853,125.611L107.853,95.935Z" style="fill:rgb(112,95,95);"/>
    </g>
    <g>
        <g transform="matrix(1,0,0,1,0,6.8987)">
            <path d="M77.629,90.995C82.675,90.995 86.77,95.091 86.77,100.136C86.77,105.181 82.675,100.136 77.629,100.136C72.584,100.136 68.489,105.181 68.489,100.136C68.489,95.091 72.584,90.995 77.629,90.995Z"/>
        </g>
        <g transform="matrix(1,0,0,1,43.8743,6.8987)">
            <path d="M77.629,90.995C82.675,90.995 86.77,95.091 86.77,100.136C86.77,105.181 82.675,100.136 77.629,100.136C72.584,100.136 68.489,105.181 68.489,100.136C68.489,95.091 72.584,90.995 77.629,90.995Z"/>
        </g>
    </g>
    <g transform="matrix(1.08187,0,0,0.938717,-8.18708,0.707051)">
        <path d="M70.179,39.814C74.341,32.315 86.091,26.906 99.921,26.906C113.688,26.906 125.394,32.266 129.605,39.708C134.866,42.249 140.286,46.513 145.141,52.286C157.723,67.246 161.78,86.714 154.196,95.732C146.611,104.75 143.981,83.586 131.399,68.626C128.049,64.642 124.328,61.497 120.817,58.858C115.288,61.801 108.027,63.588 100.079,63.588C92.085,63.588 84.787,61.781 79.248,58.809C75.716,61.459 71.971,64.618 68.601,68.626C56.019,83.586 53.389,104.75 45.804,95.732C38.22,86.714 42.277,67.246 54.859,52.286C59.647,46.592 64.985,42.367 70.179,39.814Z"/>
    </g>
    <g transform="matrix(1.22103,0,0,0.412101,-46.1822,90.8508)">
        <path d="M119.72,113.49C130.604,113.49 139.441,86.858 139.441,97.742C139.441,108.626 130.604,136.798 119.72,136.798C108.836,136.798 100,108.626 100,97.742C100,86.858 108.836,113.49 119.72,113.49Z" style="fill:white;"/>
    </g>
    <g>
        <g transform="matrix(-0.610515,7.47665e-17,-1.72619e-17,-0.140954,150.721,111.303)">
            <path d="M119.72,113.49C130.604,113.49 139.441,86.858 139.441,97.742C139.441,108.626 130.604,136.798 119.72,136.798C108.836,136.798 100,108.626 100,97.742C100,86.858 108.836,113.49 119.72,113.49Z"/>
        </g>
        <g transform="matrix(-0.610515,7.47665e-17,-1.72619e-17,-0.140954,194.595,111.303)">
            <path d="M119.72,113.49C130.604,113.49 139.441,86.858 139.441,97.742C139.441,108.626 130.604,136.798 119.72,136.798C108.836,136.798 100,108.626 100,97.742C100,86.858 108.836,113.49 119.72,113.49Z"/>
        </g>
    </g>
</svg> -->
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
          console.log(response.data.persona.gender.unweighted);
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
          this.skinColor = {
            fill: "#006622"
          }
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
      skinColor: {
        fill: String
      }
    };
  },
  mounted() {
    this.fetchData();
  }

};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  background: #f1f1f1;
  padding: 10px 10px 10px 10px;
  margin: 0 0 10px 0;
}
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

#face {
  fill: rgb(154,134,134);
}

#nose {
  fill: #885555;
}

#lefteye {
  fill: #333;
}

#righteye {
  fill: #333;
}

#mouth {
  fill: #fff;
}

</style>
