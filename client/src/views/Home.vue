<template>
  <div class="home">
    <Character/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Character from "@/components/Character.vue"; // @ is an alias to /src

@Options({
  components: {
    Character
  },
})
export default class Home extends Vue {}
</script>
