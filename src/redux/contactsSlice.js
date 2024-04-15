import { createSlice } from "@reduxjs/toolkit";

 export const INITIAL_STATE = {
contacts: {
		items: []
	},
filters: {
		name: ""
	}
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE.contacts,
  reducers: {
    addContact(state, action) {      
        state.items.push(action.payload);
    },
    deleteContact (state, action) {
       state.items = state.items.filter((user) => user.id !== action.payload);
    },

  },
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items;