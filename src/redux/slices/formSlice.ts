import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface FormState {
    x: string;
    y: string;
    r: string;
}

const initialState: FormState = {
    x: '0',
    y: "0",
    r: '2',
};

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setX: (state, action: PayloadAction<string>) => {
            state.x = action.payload;
        },
        setY: (state, action: PayloadAction<string>) => {
            state.y = action.payload;
        },
        setR: (state, action: PayloadAction<string>) => {
            state.r = action.payload;
        },
    },
});

export const { setX, setY, setR } = formSlice.actions;
export default formSlice.reducer;
