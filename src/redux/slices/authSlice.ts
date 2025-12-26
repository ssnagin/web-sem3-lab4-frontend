// src/redux/slices/authSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {clearAuthToken, getAuthToken, setAuthToken} from "../../utils/cookies.ts";

interface AuthState {
    isAuthenticated: boolean;
    username?: string;
    token?: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    username: undefined,
    token: undefined,
};

const isTokenExpired = (token: string): boolean => {
    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        return Date.now() >= payload.exp * 1000;
    } catch (e) {
        return true;
    }
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ username: string; token: string }>) {
            const { username, token } = action.payload;
            if (isTokenExpired(token)) return;

            state.isAuthenticated = true;
            state.username = username;
            state.token = token;
            setAuthToken(token);
        },
        logout(state) {
            state.isAuthenticated = false;
            state.username = undefined;
            state.token = undefined;
            clearAuthToken();
        },
        restoreAuth(state) {
            const token = getAuthToken();
            if (!token) return;

            if (isTokenExpired(token)) {
                clearAuthToken();
                return;
            }

            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                state.isAuthenticated = true;
                state.username = payload.sub;
                state.token = token;
            } catch (e) {
                clearAuthToken();
            }
        },
    },
});

export const { login, logout, restoreAuth } = authSlice.actions;
export default authSlice.reducer;