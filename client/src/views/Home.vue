<template>
  <div class="home">
    <Avatar/>
    <h1>Hello</h1>
    <Character/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Character from "@/components/Character.vue"; // @ is an alias to /src
import Avatar from "@/components/Avatar.vue"; // @ is an alias to /src

@Options({
  components: {
    Avatar,
    Character
  },
})
export default class Home extends Vue {}
</script>
