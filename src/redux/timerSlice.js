import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hours: 0,
    minutes: 0,
    seconds: 0,
    isRunning: false,
    measurements: [], 
    currentTime: new Date().toISOString(),
    time:60
}

const timeSlice = createSlice({
    name:'timer',
    initialState,
    reducers:{
    start:(state)=>{
        state.isRunning = true;
    },
    stop:(state)=>{
        state.isRunning = false;
    },
    reset:(state)=>{
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
        if(state.isRunning){
  
            if(state.hours === 0 && state.minutes ===0 && state.seconds === 0){
                alert('Not addable')
            } else{
                state.measurements.push({
                    hours: state.hours,
                    minutes: state.minutes,
                    seconds: state.seconds,
                });
            }
        }

       
    },
    recordMeasurement2: (state) => {
        if (state.isRunning && (state.hours !== 0 || state.minutes !== 0 || state.seconds !== 0)) {
            state.measurements.push({
                hours: state.hours,
                minutes: state.minutes,
                seconds: state.seconds,
                
            });
        } else {
            alert('Impossible');
        }
    },

    
    updateCurrentTime: (state) => {
        state.currentTime = Date.now(); 
    

    },
    incrementHours: (state) => {
        state.hours += 1;
    },
    decrementHours: (state) => {
        if (state.hours > 0) state.hours -= 1;
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
},

   
        
    }
)
export const {
    start,stop,reset,tick,recordMeasurement, recordMeasurement2,updateCurrentTime,incrementHours,
    decrementHours,
    incrementMinutes,
    decrementMinutes,
    incrementSeconds,
    decrementSeconds,
} = timeSlice.actions;                                                                             

export default timeSlice.reducer