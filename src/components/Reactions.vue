<template>
  <div class="reactions_wrapper" >
    <div class="reactions_content" v-for="(reaction, index) in reactions" :key="index">
      <a class="reaction_btn" href="#?">
        <img :src="'/images/reactions/' + reaction + '@2x.png'" alt="" srcset="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reactions',
  props: {
  },
  data() {
    return {
      reactions: [
        'Rage',
        'Heart',
        'Poo',
        'Laugh',
        'Bored',
        'Cry',
        'Fire',
      ],
    }
  },
  watch: {

  },
  computed: {

  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
