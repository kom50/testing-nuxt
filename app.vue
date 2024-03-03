<template>
  <div>

    <h1 data-testid="count">Count : {{ countStore.count }}</h1>

    <button data-testid="btn" id="btn" @click="countStore.increment">Increment</button>
  </div>
</template>



<script setup lang="ts">
import useCountStore from './stores/count'
// const count = ref(0)

// function increment() {
//   count.value++
// }

const countStore = useCountStore()

</script>