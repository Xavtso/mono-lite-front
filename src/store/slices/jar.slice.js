import { createSlice } from "@reduxjs/toolkit";
import { getUserJars } from "../../services/jar";

const jarSlice = createSlice({
  name: "jar",
  initialState: {
    jars: [
      {
        vault_id: null,
        user_id: null,
        vault_title: "",
        target_sum: null,
        vault_balance: null,
        contributors: null,
      },
    ],
    choosenJar: null,
    accumulated: 0,
  },
  reducers: {
    chooseJar(state, action) {
      state.choosenJar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserJars.fulfilled, (state, action) => {
      state.jars = action.payload.reverse();
      state.accumulated = state.jars.reduce(
        (acc, val) => acc + val.vault_balance,
        0,
      );
    });
  },
});

export const jarSliceActions = jarSlice.actions;

export default jarSlice;
