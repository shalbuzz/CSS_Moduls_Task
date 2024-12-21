import { createSlice } from "@reduxjs/toolkit";

const initialStopwatchState = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    isRunning: false,
    measurements: [],
};

const stopwatchSlice = createSlice({
    name: 'stopwatch',
    initialState: initialStopwatchState,
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
        tick: (state) => {
            if (state.isRunning) {
                state.seconds += 1;
                if (state.seconds >= 60) {
                    state.seconds = 0;
                    state.minutes += 1;
                }
                if (state.minutes >= 60) {
                    state.minutes = 0;
                    state.hours += 1;
                }
            }
        },
        recordMeasurement: (state) => {
            if (state.isRunning && (state.hours !== 0 || state.minutes !== 0 || state.seconds !== 0)) {
                state.measurements.push({
                    hours: state.hours,
                    minutes: state.minutes,
                    seconds: state.seconds,
                });
            } else {
                alert('Impossible to record measurement.');
            }
        },

        /* LocalStorage ucun hemise qutaran kimi islesin gore::  
        
         loadStateFromStorage: (state, action) => {
            const { hours, minutes, seconds, isRunning, measurements } = action.payload;
            state.hours = hours;
            state.minutes = minutes;
            state.seconds = seconds;
            state.isRunning = isRunning;
            state.measurements = measurements || [];
        },
    },
        */
    },
});
//export const { loadStateFromStorage}
export const { start, stop, reset, tick, recordMeasurement } = stopwatchSlice.actions;
export default stopwatchSlice.reducer;
