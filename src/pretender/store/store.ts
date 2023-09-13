import { configureStore } from "@reduxjs/toolkit";
import shipReducer from "./ShipSlice";
import keyMappingsReducer from "./KeyMappingSlice";
import bulletsReducer from "./BulletSlice";

const store = configureStore({
  reducer: {
    ship: shipReducer,
    keyMappings: keyMappingsReducer,
    bullets: bulletsReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
