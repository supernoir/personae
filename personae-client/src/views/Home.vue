<template>
  <div class="home">
    <HelloWorld msg="Personae" />
    <Character/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Character from "@/components/Character.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    Character
  },
})
export default class Home extends Vue {}
</script>
