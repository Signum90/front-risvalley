/** ==================================================
 * ZUSTAND: Auth store
================================================== **/
import { create } from 'zustand'
// > Almancen de Autenticación
export const authStore = create((set) => ({
  // Auth var
  auth: false,
  // Login
  login: set((state) => ({
    auth: state.auth = true
  })),
  // Cierre de Session
  logout: set((state) => ({
    auth: state.auth = false
  }))
}))
