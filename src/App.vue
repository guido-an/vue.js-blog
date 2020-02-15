<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from "./components/addBlog";
import showBlog from "./components/showBlog";
import header from "./components/header";
export default {
  components: {
    "add-blog": addBlog,
    "show-blog": showBlog,
    "app-header": header
  },
  name: "app",
  data() {
    return {};
  }
};
</script>

<style></style>
