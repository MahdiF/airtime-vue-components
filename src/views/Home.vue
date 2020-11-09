<template>
  <div class="home">
    <div class="main_wrapper">
      <h2>Emoji Picker</h2>
      <EmojiPicker />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EmojiPicker from '@/components/EmojiPicker.vue'

export default {
  name: 'Home',
  components: {
    EmojiPicker
  }
}
</script>
