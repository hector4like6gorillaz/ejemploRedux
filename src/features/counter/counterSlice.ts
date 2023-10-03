import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  solo50:number,
}

const initialState: CounterState = {
  value: 0,
  solo50:0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    equal50:(state)=>{
      state.solo50 = 50
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, equal50 } = counterSlice.actions

export default counterSlice.reducer