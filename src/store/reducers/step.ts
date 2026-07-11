import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { StepState } from '@/types'

const initialState: StepState = {
  current: 0
}

const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    updateStep(state, action: PayloadAction<{ current: StepState['current'] }>) {
      state.current = action.payload.current
    }
  }
})

export default stepSlice.reducer

export const { updateStep } = stepSlice.actions
