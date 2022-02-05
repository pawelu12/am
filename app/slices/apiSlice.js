import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogged: false,
  theme: 'light',
  scanner: false,
  barcode: '',
  scanned: false,
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
    },
    toggleScanner: state => {
      if(state.scanner === false) {
        state.scanned = false
        state.barcode = ''
      }
      state.scanner = !state.scanner
    },
    setBarcode: (state, action) => {
      if(action.payload !== ' ') {
        state.barcode = action.payload
        scanned = true
      }
      else {
        state.barcode = ''
        scanned = false
      }
    }
  }
})

export const { signIn, signOut, signUp, toggleScanner, setBarcode } = apiSlice.actions

export default apiSlice.reducer