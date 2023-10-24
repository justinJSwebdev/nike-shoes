import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/redux/store'

// Define a type for the slice state
interface ModelStatus {
  status: boolean
}

// Define the initial state using that type
const initialState: ModelStatus = {
  status: false
}

export const ModelSlice = createSlice({
  name: 'model',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    open: (state) => {
      state.status = true
    },
    close: (state) => {
      state.status = false
    }
    // Use the PayloadAction type to declare the contents of `action.payload`
  }
})

export const { open, close } = ModelSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.status

export default ModelSlice.reducer
