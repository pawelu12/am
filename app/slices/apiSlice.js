import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false,
  theme: 'light',
  loggedPerson: {
    login: null,
    notifications: {},
    newNotifications: 2,
  }
}

export const apiSlice = createSlice({
  name: 'apiSlice',
  initialState,
  reducers: {
    signIn: (state, action) => {
      const { login, pass, navigation } = action.payload
      if(login === 'admin' && pass === 'admin') {
        state.isLogged = true
        state.loggedPerson.login = login
      }
    },
    signUp: (state, action) => {
      const { login, pass, pass2, navigation } = action.payload
      if(login !== 'admin' && pass === pass2 && login.trim().length > 0 && pass.length > 4 && pass2.length > 4) {
        state.isLogged = true
        state.loggedPerson.login = login
      }
    },
    signOut: (state, action) => {
      state.loggedPerson.login = null
      state.isLogged = false
    }
  }
})

export const { signIn, signOut, signUp } = apiSlice.actions

export default apiSlice.reducer