<template>
  <div>
    <h2>All Posts</h2>
    <div v-for="post in posts" :key="post.id">
      <nuxt-link :to="String(post.id)" append>{{ post.title }}</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => ({ posts }))
  }
}
</script>

<style></style>
