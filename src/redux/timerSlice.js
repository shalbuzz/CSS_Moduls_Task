import { createSlice } from "@reduxjs/toolkit";

const initialTimerState = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    isRunning: false,
    measurements: [],
};

const timerSlice = createSlice({
    name: 'timer',
    initialState: initialTimerState,
    reducers: {
        start: (state) => {
            
            state.isRunning = true;
        },
        stop: (state) => {
            state.isRunning = false;
        },
        reset: (state) => {
            state.hours = 0;
            state.minutes = 0;
            state.seconds = 0;
            state.isRunning = false;
            state.measurements = [];
        },
        
        recordMeasurement: (state) => {
            if (state.hours !== 0 || state.minutes !== 0 || state.seconds !== 0) {
                state.measurements.push({
                    hours: state.hours,
                    minutes: state.minutes,
                    seconds: state.seconds,
                });
            }
        },

        incrementHours: (state) => {
            state.hours += 1;
        },
        decrementHours: (state) => {
            if (state.hours > 0) {
                state.hours -= 1;
            }
        },
        incrementMinutes: (state) => {
            if (state.minutes < 59) {
                state.minutes += 1;
            } else {
                state.minutes = 0;
                state.hours += 1;
            }
        },
        decrementMinutes: (state) => {
            if (state.minutes > 0) {
                state.minutes -= 1;
            } else if (state.hours > 0) {
                state.minutes = 59;
                state.hours -= 1;
            }
        },
        incrementSeconds: (state) => {
            if (state.seconds < 59) {
                state.seconds += 1;
            } else {
                state.seconds = 0;
                if (state.minutes < 59) {
                    state.minutes += 1;
                } else {
                    state.minutes = 0;
                    state.hours += 1;
                }
            }
        },
        decrementSeconds: (state) => {
            if (state.seconds > 0) {
                state.seconds -= 1;
            } else if (state.minutes > 0) {
                state.seconds = 59;
                state.minutes -= 1;
            } else if (state.hours > 0) {
                state.seconds = 59;
                state.minutes = 59;
                state.hours -= 1;
            }
        },
  /* LocalStorage ucun hemise qutaran kimi islesin gore::  
        setRemainingTime: (state, action) => {
            const totalSeconds = action.payload;
            state.hours = Math.floor(totalSeconds / 3600);
            state.minutes = Math.floor((totalSeconds % 3600) / 60);
            state.seconds = totalSeconds % 60;
        },
        loadStateFromStorage: (state, action) => {
            const { hours, minutes, seconds, isRunning } = action.payload;
            state.hours = hours;
            state.minutes = minutes;
            state.seconds = seconds;
            state.isRunning = isRunning;
        },
        */
    
    },
});
//export const {setRemainingTime , loadStateFromStorage}
export const { start, stop, reset,recordMeasurement,incrementHours,decrementHours,incrementMinutes,decrementMinutes,incrementSeconds,decrementSeconds } = timerSlice.actions;
export default timerSlice.reducer;
