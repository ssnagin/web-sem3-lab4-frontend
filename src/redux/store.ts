import {configureStore} from '@reduxjs/toolkit';
import authSlice from "./slices/authSlice.ts";
import formSlice from "./slices/formSlice.ts";
import pointsSlice from "./slices/pointsSlice.ts";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        form: formSlice,
        points: pointsSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;