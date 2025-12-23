// src/redux/slices/authSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    isAuthenticated: boolean;
    username?: string;
}

const initialState: AuthState = {
    isAuthenticated: false,
    username: undefined,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<{ username: string }>) {
            state.isAuthenticated = true;
            state.username = action.payload.username;

            localStorage.setItem('auth', JSON.stringify({ isAuthenticated: true, username: action.payload.username }));
        },
        logout(state) {
            state.isAuthenticated = false;
            state.username = undefined;
            localStorage.removeItem('auth');
        },

        restoreAuth(state) {
            const saved = localStorage.getItem('auth');
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);
                    if (parsed.isAuthenticated) {
                        state.isAuthenticated = true;
                        state.username = parsed.username;
                    }
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (_e) { /* empty */ }
            }
        },
    },
});

export const { login, logout, restoreAuth } = authSlice.actions;
export default authSlice.reducer;