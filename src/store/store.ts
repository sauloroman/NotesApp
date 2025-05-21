import { configureStore, type Action, type ThunkAction } from "@reduxjs/toolkit";
import { authSlice } from "./auth/auth.slice";
import { uiSlice } from "./ui/ui.slice";
import { notesSlice } from "./notes/notes.slice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        notes: notesSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>