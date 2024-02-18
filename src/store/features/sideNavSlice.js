import { createSlice } from '@reduxjs/toolkit'

export const sideNavSlice = createSlice({
  name: 'counter',
  initialState: {
    open: false
  },
  reducers: {
    toggleSideNav:(state, action)=>{
      state.open = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleSideNav } = sideNavSlice.actions

export default sideNavSlice.reducer