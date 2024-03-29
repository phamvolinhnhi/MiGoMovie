import { configureStore } from "@reduxjs/toolkit";
import appStateSlice from "./features/appStateSlice";
import globalLoadingSlice from "./features/globalLoadingSlice";
import themeModeSlice from "./features/themeModeSlice";
import userSlice from "./features/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    themeMode: themeModeSlice,
    globalLoading: globalLoadingSlice,
    appState: appStateSlice
  }
});

export default store;