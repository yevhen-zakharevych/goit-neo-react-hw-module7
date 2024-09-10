import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export const selectContacts = (state) => state.contacts.items;

export default slice.reducer;
