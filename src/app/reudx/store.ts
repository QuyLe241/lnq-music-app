import { configureStore } from '@reduxjs/toolkit'
import dataSongSlice from "./dataSongSlice"


export const store = configureStore({
  reducer: {
    dataSongSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch