<template>
  <main>
    <h2>Directory</h2>
    <p>These are the imaginary people who use this goofy app.</p>

    <table>
      <thead>
        <tr>
          <th>username</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  asyncData(context) {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => ({ users }))
  }
}
</script>
