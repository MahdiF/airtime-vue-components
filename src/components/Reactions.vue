<template>
  <div class="reactions_wrapper">

    <section class="reaction_btns_wrapper" >
      <div class="reaction_btns_content">
        <a
          class="reaction_btn" href="#?"
          @click.stop="addReaction"
          @mouseover="reactionBtnImg = reactionBtnImgAnimated"
          @mouseout="reactionBtnImg = reactionBtnImgNormal"
          >
          <img :src="reactionBtnImg" alt="" srcset="">
        </a>
      </div>
      <div class="reaction_btns_content">
        <a
          class="reaction_btn" href="#?"
          @click.stop="addSticker(120,120)"
          @mouseover="stickerBtnImg = stickerBtnImgAnimated"
          @mouseout="stickerBtnImg = stickerBtnImgNormal"
          >
          <img :src="stickerBtnImg" alt="" srcset="">
        </a>
      </div>
    </section>
    <section ref="reactionsSafeArea" class="reactions_safe_area">
      <transition
        v-for="(reaction, index) in reactions"
        :key="index"
        name="floatUp"
        :after-leave="deleteReaction(index)"
      >
        <div
          class="reaction_object"
          :style="reaction.position"
          >
            <img src="@/assets/images/reactions/reaction-laugh.png" alt="" srcset="">
        </div>
      </transition>
      <!-- <div class="reaction_object floatUp-enter-active">😃</div> -->
      <!-- <div class="reaction_object floatUp-enter-active"><img src="@/assets/images/reactions/reaction-laugh.png" alt="" srcset=""></div> -->
      
      <transition
        name="fade"
      >
        <div class="sticker" :style="stickerStyle" v-if="stickerShown">
          <img :src="stickerBtnImgAnimated" alt="">
        </div>
      </transition>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'Reactions',
  props: {
  },
  data() {
    return {
      stickerShown: false,
      stickerStyle: {
        transform: "rotate(135deg)",
        top: "250px",
        left: "600px",
      },
      reactions: [],
      reactionBtnImg:"/images/reactions/reaction-laugh.png",
      reactionBtnImgNormal: "/images/reactions/reaction-laugh.png",
      reactionBtnImgAnimated: "/images/reactions/reaction-laugh-animated.png",

      stickerBtnImg:"/images/reactions/sticker-mood.png",
      stickerBtnImgNormal:"/images/reactions/sticker-mood.png",
      stickerBtnImgAnimated:"/images/reactions/sticker-mood-animated.png",
    }
  },
  methods: {
    getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max-min)) + min;
    },
    generateRandomPosition(reactionWidth, reactionHeight) {
      let reactionsSafeArea = this.$refs['reactionsSafeArea'];
      let reactionsSafeAreaWidth = reactionsSafeArea.offsetWidth;
      let reactionsSafeAreaHeight = reactionsSafeArea.offsetHeight;
      let randomTopPosition = this.getRandomNumber(reactionsSafeAreaHeight/2, reactionsSafeAreaHeight-reactionHeight);
      let randomLeftPosition = this.getRandomNumber(0, reactionsSafeAreaWidth-reactionWidth);

      return {
        // top: randomTopPosition + 'px',
        // left: randomLeftPosition + 'px',
        top: randomTopPosition / reactionsSafeAreaHeight * 100 + "%",
        left: randomLeftPosition / reactionsSafeAreaWidth * 100 + "%",
      }
    },
    addSticker(stickerWidth, stickerHeight){
      let reactionsSafeArea = this.$refs['reactionsSafeArea'];
      let reactionsSafeAreaWidth = reactionsSafeArea.offsetWidth;
      let reactionsSafeAreaHeight = reactionsSafeArea.offsetHeight;
      let randomAngle = this.getRandomNumber(0, 360);
      let randomTopPosition = this.getRandomNumber(0, reactionsSafeAreaHeight-stickerHeight);
      let randomLeftPosition = this.getRandomNumber(0, reactionsSafeAreaWidth-stickerWidth);

      console.log(reactionsSafeAreaHeight);

      this.stickerStyle = {
        transform: `rotate(${randomAngle}deg)`,
        top: randomTopPosition / reactionsSafeAreaHeight * 100 + "%",
        left: randomLeftPosition / reactionsSafeAreaWidth * 100 + "%",
      }
      this.stickerShown=!this.stickerShown;

      let that=this;
      setTimeout(()=>{
        that.stickerShown=false;
      }, 1700)
    },
    deleteReaction(index) {
      this.$delete(this.reactions, index);
    },
    addReaction() {

      this.reactions.push({
        position: this.generateRandomPosition(48,48),
      });

    },
  },
  watch: {
    // reactions: function(val) {
    //   this.reactionsCount = val.length;
    // }
  }
}
</script>

<style>
/* TODO's */
/* 
[ ] Show emoji in a random position in % instead of PX
[ ] Add stickers animation
[ ] Swap emojis with real reactions & stickers
[ ] Remove emoji after it's done animating.
[ ] Use Vue animation

----------
[ ] Stickers should appear with a tilt + Add this to specs.
[ ] Update specs to keep old navigation designed by Gui.
[ ] Reach out to Omar to learn more about the animation curve.
[ ] Reach out to Vince to learn more about the rules we have for showing stickers on the screen.
*/
</style>