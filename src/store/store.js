import { configureStore } from '@reduxjs/toolkit'
import sideNavSlice from "./features/sideNavSlice"

export default configureStore({
  reducer: {
    sideNav: sideNavSlice
  },
})