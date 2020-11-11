<template>
  <div class="main_wrapper">
    <h2>Emoji Picker</h2>
    <EmojiPicker />
    <hr>
    <h2>Reactions</h2>
    <Reactions />
  </div>
</template>

<script>
// @ is an alias to /src
import EmojiPicker from '@/components/EmojiPicker.vue'
import Reactions from '@/components/Reactions.vue'

export default {
  name: 'Home',
  components: {
    EmojiPicker,
    Reactions,
  }
}
</script>
