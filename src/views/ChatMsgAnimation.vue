<template>
  <div id="main_wrapper">
    <div class="settings_wrapper">
      <div class="settings_cont" v-if="settingsShown">
        <h2>⚙️ Animation Settings ⚙️</h2>
        <hr />
        <div class="animation_type">
          <h3>🚀 → Type</h3>
          <div class="animation_type_option">
            <input
              type="radio"
              id="scaleFadeAnim"
              name="animation_type"
              value="0"
              v-model="animationType"
            />
            <label for="scaleFadeAnim">💥 Scale and fade in</label>
          </div>
          <div class="animation_type_option">
            <input
              type="radio"
              id="slideInAnim"
              name="animation_type"
              value="1"
              v-model="animationType"
            />
            <label for="slideInAnim">➡️ Slide in from the side</label>
          </div>
          <div class="animation_type_option">
            <input
              type="radio"
              id="scalInPlaceAnim"
              name="animation_type"
              value="2"
              v-model="animationType"
            />
            <label for="scalInPlaceAnim">🥱 Scale &amp; fade in place</label>
          </div>
        </div>
        <hr />
        <div class="animation_duration">
          <h3>⏱ → Duration in Seconds</h3>
          <input type="number" value="0.3" v-model="animationDuration" />
        </div>
        <hr />
        <!-- <button @click="sendAutoMessages">{{ autoSendBtnTxt }}</button>
        <hr /> -->
      </div>

      <button class="settings_btn" @click="settingsShown = !settingsShown">
        Toggle Settings
      </button>
    </div>
    <div class="chat_wrapper" ref="chatWrapper">
      <div class="chat_timeline">
        <div
          v-for="(message, index) in chatMessages"
          :key="index"
          :class="[
            {
              msg_bubble: !message.color,
              'msg_bubble msg_bubble_purple': message.color,
            },
          ]"
          :style="[!message.color ? activeStyle : activeStyleRight]"
        >
          {{ message.msg }}
        </div>
      </div>
    </div>

    <div class="bottomBar">
      <input
        type="text"
        v-model="msgSent"
        @keyup.enter="sendMsg(false)"
        placeholder="Send a message..."
      />
      <input
        type="text"
        v-model="msgReceived"
        @keyup.enter="sendMsg(true)"
        placeholder="Receive a message..."
      />
    </div>
  </div>
</template>

<script>
// import ReactionButtons from '@/components/ReactionButtons.vue'

export default {
  name: "ChatMsgAnimation",
  components: {},
  props: {},
  data() {
    return {
      randomMessagesCounter: 0,
      settingsShown: true,
      animationType: "0",
      animationStyle: [
        {
          left: {
            animation:
              "scaleUp 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
          },
          right: {
            animation:
              "scaleUpRight 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
          },
        },
        {
          left: {
            animation:
              "slideIn 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
          },
          right: {
            animation:
              "slideInRight 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
          },
        },
        {
          left: {
            animation:
              "scaleInPlace 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
          },
          right: {
            animation:
              "scaleInPlace 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards",
          },
        },
      ],
      activeStyle: "",
      activeStyleRight: "",
      animationDuration: "0.2",
      msgSent: "",
      msgReceived: "",
      chatMessages: [
        // { msg: "Sent", color: false },
        // { msg: "Received", color: true }
      ],
      randomMessageTimer: undefined,
      autoSendBtnTxt: "Send auto messages",
    };
  },
  methods: {
    sendMsg(msgType) {
      let message;
      if (msgType) {
        if (this.msgReceived !== "") {
          message = { msg: this.msgReceived, color: msgType };
          this.chatMessages.push(message);
          this.msgReceived = "";
          let that = this;
          setTimeout(that.scrollToLates, 10);
        }
      } else {
        if (this.msgSent !== "") {
          message = { msg: this.msgSent, color: msgType };
          this.chatMessages.push(message);
          this.msgSent = "";
          let that = this;
          setTimeout(that.scrollToLates, 10);
        }
      }
    },
    scrollToLates() {
      let chatWrapper = this.$refs["chatWrapper"];
      chatWrapper.scrollTo(0, chatWrapper.scrollHeight);
    },
    updateStyles() {
      let animationDuration = `${this.animationDuration}s`;

      this.activeStyle = this.animationStyle[this.animationType].left;
      this.activeStyle.animationDuration = animationDuration;

      this.activeStyleRight = this.animationStyle[this.animationType].right;
      this.activeStyleRight.animationDuration = animationDuration;
    },
    addNewRandomMessage() {
      this.randomMessagesCounter++;
      let message = `Message ${this.randomMessagesCounter}`;

      this.msgReceived = message;
      this.sendMsg(true);
    },
    sendAutoMessages() {
      if (this.randomMessageTimer == undefined) {
        this.randomMessageTimer = setInterval(this.addNewRandomMessage, 400);
        this.autoSendBtnTxt = "Stop auto messages";
      } else {
        this.randomMessageTimer = clearInterval(this.addNewRandomMessage);
        this.autoSendBtnTxt = "Send auto messages";
      }
    },
  },
  created: function () {
    this.updateStyles();
  },
  watch: {
    animationType: function () {
      this.updateStyles();
    },
    animationDuration: function () {
      this.updateStyles();
    },
    chatMessages: function () {
      this.scrollToLates();
    },
  },
};
</script>

<style scoped>
@import "./../assets/css/chatMsgAnimation.css";
</style>
