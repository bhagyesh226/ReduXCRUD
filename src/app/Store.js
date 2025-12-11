
import { configureStore } from '@reduxjs/toolkit';
import  userDate  from '../features/userdateSlice';

export const store=configureStore({
    reducer:{
        app : userDate,
    }
})