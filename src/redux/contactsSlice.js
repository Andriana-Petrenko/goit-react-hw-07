import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";
import { addContact, deleteContact } from "./contactsOps";

 export const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null
  },
  filters: {
		name: ""
	}
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE.contacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending,(state) => {
       state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
    .addCase(addContact.rejected,(state, action) => {
       state.loading = false;
       state.error = action.payload;
    })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
       state.loading = false;
       state.items = state.items.filter((item) => item.id !== action.payload.id)
    })
    .addCase(deleteContact.rejected,(state, action) => {
       state.loading = false;
       state.error = action.payload;
    })
  },
});


// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
