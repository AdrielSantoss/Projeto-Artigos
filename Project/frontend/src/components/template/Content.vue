<template>
  <div class="content" @click="click">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Content",
  computed: mapState(["isMenuVisible"]),
  methods: {
    click() {
      if (this.isMenuVisible && this.$mq === 'xs' || this.$mq === 'sm') {
        this.$store.commit("toggleMenu", false);
      }
    }
  }
};
</script>

<style>
.content {
  grid-area: content;
  background-color: #efefef;
  padding: 20px;
}
</style>
