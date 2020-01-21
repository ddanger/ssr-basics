<template>
  <div>
    <h2>Post Details</h2>
    <h3>Title</h3>
    <p>{{ post.title }}</p>
    <h3>Body</h3>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  asyncData(context) {
    return fetch(
      'https://jsonplaceholder.typicode.com/posts/' + context.params.id
    )
      .then(response => response.json())
      .then(post => ({ post }))
  }
}
</script>
