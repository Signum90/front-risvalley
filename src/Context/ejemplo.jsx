import { create } from 'zustand'

export const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}))

// el nombre del contexto se crea dependiendo de lo que se va a guardar en el, si se guardan cosas distintas se crean distintos contextos