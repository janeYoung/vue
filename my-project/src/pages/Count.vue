<template>
	<div id="app">
	  <p>{{ count }}</p>
	  <p>
	    <button @click="increment">+</button>
	    <button @click="decrement">-</button>
	  </p>
	</div>
</template>
<script>

import store from '../scripts/store'
export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>
