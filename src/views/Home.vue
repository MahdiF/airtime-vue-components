<template>
  <div class="main_wrapper">
    <h2>Reactions</h2>
    <Reactions />
    <hr>
    <h2>Emoji Picker</h2>
    <EmojiPicker />
    <hr>
    <h2>Reaction Buttons</h2>
    <ReactionButtons />
  </div>
</template>

<script>
// @ is an alias to /src
import EmojiPicker from '@/components/EmojiPicker.vue'
import Reactions from '@/components/Reactions.vue'
import ReactionButtons from '@/components/ReactionButtons.vue'

export default {
  name: 'Home',
  components: {
    EmojiPicker,
    Reactions,
    ReactionButtons,
  }
}
</script>