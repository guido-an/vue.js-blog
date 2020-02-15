<template>
  <div>
    <ul>
      <li><router-link to="/" exact>Blog</router-link></li>
      <li><router-link to="/add" exact>Add a new post</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
.router-link-active {
  color: green;
}
</style>
