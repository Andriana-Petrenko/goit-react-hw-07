import {INITIAL_STATE} from './contactsSlice'
import { createSlice } from "@reduxjs/toolkit"

const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE.filters,
  reducers: {
      changeFilter(state, action) {
           state.name = action.payload;
   }

  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

 
export const selectNameFilter = state => state.filters.name;