import { configureStore } from '@reduxjs/toolkit';
import employees from './employees';

const store = configureStore({
    reducer:{
        employees:employees,
    }
})

export default store