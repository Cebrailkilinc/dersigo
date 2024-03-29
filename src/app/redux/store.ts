import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userSlice from '@/core/slices/user.slice';
export const store = configureStore({
    reducer: {
        user: userSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;