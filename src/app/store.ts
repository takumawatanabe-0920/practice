import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import counterSlice from '@practice/features/counter/counterSlice'

// setup 関数を用意してエクスポートする。
const setupStore = () => {
  const middlewares = [...getDefaultMiddleware()]

  const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
    },
    middleware: middlewares,
  })

  return store
}

const store = setupStore()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
