import { createSlice } from "@reduxjs/toolkit";

const initialClockState = {
    currentTime: new Date().toISOString(),
};

const clockSlice = createSlice({
    name: 'clock',
    initialState: initialClockState,
    reducers: {
        updateCurrentTime: (state) => {
            state.currentTime = new Date().toISOString(); 
        },
    },
});

export const { updateCurrentTime } = clockSlice.actions;
export default clockSlice.reducer;
