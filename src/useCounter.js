import { ref } from 'vue'

export default function useCounter() {
  const count = ref(0)

  function increment() {
    count.value++
  }

  function decrement() {
    count.value--
  }

  function reset() {
    count.value = 0
  }

  function setValue(value) {
    count.value = value
  }

  return { count, increment, decrement, reset, setValue }
}