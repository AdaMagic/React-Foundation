import { createSlice } from "@reduxjs/toolkit";

const counterStore = createSlice({
  name: "counter",
  // 初始化state
  initialState: {
    count: 0,
  },
  // 修改状态的方法
  reducers: {
    inscrement(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
});

// 结构出actionCreater方法
const { inscrement, decrement } = counterStore.actions;
// 获取reducer
const reducer = counterStore.reducer;

// 以按需导出的方式导出actionCreater
export { inscrement, decrement };
// 以默认导出的方式导出reducer
export default reducer;
