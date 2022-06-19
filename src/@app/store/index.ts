import {configureStore} from '@reduxjs/toolkit';
import vacanciesRatesSlice from '../../entites/vacancies-rates/model/store';
import authSlice from '../../features/auth/ui/model/store';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    vacanciesRates: vacanciesRatesSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
