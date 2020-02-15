<template>
  <div id="add-blog">
    <h2>Add a new blog</h2>
    <form v-if="!submitted">
      <label>Blog Title</label>
      <input type="text" v-model.lazy="blog.title" />
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div>
        <label>Ninjas</label>
        <input type="checkbox" value="ninjas" v-model="blog.categories" />
        <label>Wizards</label>
        <input type="checkbox" value="wizards" v-model="blog.categories" />
        <label>Mario</label>
        <input type="checkbox" value="mario" v-model="blog.categories" />
        <label>Cheese</label>
        <input type="checkbox" value="cheese" v-model="blog.categories" />
      </div>
      <select v-model="blog.author">
        <option v-for="author in authors">{{ author }}</option>
      </select>
      <button v-on:click.prevent="post">Add blog</button>
    </form>
    <div v-if="submitted">
      <p>Post submitted!</p>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content:</p>
      <p>{{ blog.content }}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{ category }}</li>
      </ul>
      <p>Author: {{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ["The Net Ninja", "The Angular Avenger", "The Vue Vindicator"],
      submitted: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("https://jsonplaceholder.typicode.com/posts", {
          title: this.blog.title,
          body: this.blog.content,
          userID: 1
        })
        .then(data => {
          this.submitted = true;
        });
    }
  }
};
</script>

<style scoped></style>
