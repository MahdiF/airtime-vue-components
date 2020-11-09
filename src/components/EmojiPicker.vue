<template>
  <div class="emoji_picker_wrapper flex_col_cont">
    <section class="emoji_picker_header">
      <div class="emoji_search_box">
        <button><img src="@/assets/images/search_icon.svg" alt="" srcset=""></button>
        <input type="text" name="" id="" placeholder="Search emojis">
      </div>
      <button class="skin_tone_btn">
        <div class="skin_tone_icon">🤚</div>
        Skin Tone
      </button>
    </section>
    <section class="emojis_groups_wrapper">
      <section class="emojis_cont flex_col_cont" v-for="emojiCategory in emojis" :key="emojiCategory.order">
        <section class="emojis_category flex_col_cont">
          <h3 class="emojis_category_title">{{emojiCategory.name}}</h3>
          <ul class="emojis_list">
            <li v-for="(emoji, index) in emojiCategory.emojis" :key="index" class="emoji_btn">
              <a href="#">{{emoji.emoji}}</a>
            </li>
            <!-- <li class="emoji_btn"><a href="#">🤣</a></li>
            <li class="emoji_btn"><a href="#">🤣</a></li>
            <li class="emoji_btn"><a href="#">🤣</a></li>
            <li class="emoji_btn"><a href="#">🤣</a></li>
            <li class="emoji_btn"><a href="#">🤣</a></li>
            <li class="emoji_btn"><a href="#">🤣</a></li>
            <li class="emoji_btn"><a href="#">🤣</a></li>
            <li class="emoji_btn"><a href="#">🤣</a></li>
            <li class="emoji_btn"><a href="#">🤣</a></li> -->
          </ul>
        </section>
      </section>


    </section>
  </div>
</template>

<script>
import emojiSet from '@/assets/data/emoji.json'
export default {
  name: 'EmojiPicker',
  props: {
    msg: String
  },
  data() {
    return {
      emojiSet: emojiSet,
      // emojis: {
      //   'Frequently Used': ['🍌', '🔥', '✅', '🤣', '⭐️', '🤚', '🚫', '💀'],
      //   'Smileys & People': ['😀', '😃', '😄', '😁']
      // }
    }
  },
  computed: {
    emojis: function() {
      let newList = {};
      let order = 0;
      this.emojiSet.forEach(element => {
        let catName = element.category
          .replace('&', 'and')
          .split(' ')
          .join('_')
          .toLowerCase();
        if (newList[catName] === undefined) {
          newList[catName] = {
            name: element.category,
            emojis: [element],
            order: order++,
          }
        } else {
          newList[catName].emojis.push(element);
        }
      });
      console.log(newList);
      return newList;
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>
