export const state = () => ({
  tasks: []
})

export const mutations = {
  setTasks(state, newTasks) {
    state.tasks = newTasks
  }
}

export const actions = {
  nuxtServerInit({ commit }) {
    return fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(tasks => {
        commit('setTasks', tasks)
      })
  }
}
