import { createSelector } from "@reduxjs/toolkit";

const selectUserJars = (state) => state.jar.jars;
const selectChoosenJar = (state) => state.jar.choosenJar;

export const selectJar = createSelector(
  [selectUserJars, selectChoosenJar],
  (userJars, choosenJar) => {
    const jar = userJars.filter((jar) => jar.vault_id === choosenJar);
    return jar[0];
  },
);
