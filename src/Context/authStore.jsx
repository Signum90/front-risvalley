/** ==================================================
 * ZUSTAND: Auth store
================================================== **/
import { create } from 'zustand'
// > Almancen de Autenticación
const authStore = create((set) => ({
  // Auth var
  auth: true,
  type: 'user',
  // Login
  login: () => set((state) => ({
    auth: state.auth = true,
    type: state.type = 'admin'
  })),
  // Cierre de Session
  logout: () => set((state) => ({
    auth: state.auth = false
  }))
}))
 export default authStore
