<template>
  <div v-theme:column="'wide'">
    <input type="text" v-model="search" placeholder="search post" />
    <h1>All blog articles</h1>
    <div v-for="blog in filteredBlogs">
      <h2 v-rainbow>{{ blog.title | (to - uppercase) }}</h2>
      <p>{{ blog.body }}</p>
      <router-link v-bind:to="'/blog/' + blog.id"><p>Read more</p></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$http.get("https://jsonplaceholder.typicode.com/posts").then(data => {
      console.log(data);
      this.blogs = data.body.slice(0, 10);
    });
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.match(this.search);
      });
    }
  }
};
</script>

<style></style>
