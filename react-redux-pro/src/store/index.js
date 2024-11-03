import { configureStore } from "@reduxjs/toolkit";
// 导入子模块的reducer  counterReducer
import reducer from "./modules/counterStore";
const store = configureStore({
  reducer: {  
    counter: reducer,
  },
});

export default store;
