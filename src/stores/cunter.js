import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})


export const useMiStore = defineStore({
    id: 'miStore',
    state: () => ({
      variableDeEstado: 'valorInicial',
    }),
    actions: {
      cambiarVariableDeEstado(nuevoValor) {
        this.variableDeEstado = nuevoValor;
      },
    },
  });




export const hotelInformation = defineStore('hotelInformation', {
  state: () => ({
    var: ''
  }),
  actions: {
    idStore(newValue) {
      this.var = newValue; 
    },
  },
});


