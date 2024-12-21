
/*Redux elave edulmisdi*/
import { configureStore } from '@reduxjs/toolkit'
import timerReducer from './timerSlice';
import stopWatchReducer from './stopWatchSlice';
import clockReducer from './clockSlice';

export const store = configureStore({
  reducer: {
    timer:timerReducer,
    stopWatch:stopWatchReducer,
    clock: clockReducer,
  }
})

export default store;