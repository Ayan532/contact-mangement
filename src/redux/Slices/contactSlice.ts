import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../types';




// Function to load contacts from local storage
const loadContactsFromLocalStorage = (): Contact[] => {
  const contactsString = localStorage.getItem('contacts');
  if (contactsString) {
    return JSON.parse(contactsString);
  }
  return [];
};

// Function to save contacts to local storage
const saveContactsToLocalStorage = (contacts: Contact[]) => {
  localStorage.setItem('contacts', JSON.stringify(contacts));
};

// Redux slice definition
const contactSlice = createSlice({
  name: 'contact', // Slice name
  initialState: {
    contacts: loadContactsFromLocalStorage(), // Initial state with contacts loaded from local storage
    contact: {}, // Placeholder for a single contact (used in the getContactById action)
  },
  reducers: {
    // Action to add a contact
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
      saveContactsToLocalStorage(state.contacts);
    },

    // Action to edit a contact
    editContact: (state, action: PayloadAction<Contact>) => {
      const updatedContact = action.payload;
      const index = state.contacts.findIndex(contact => contact.id === updatedContact.id);
      if (index !== -1) {
        state.contacts[index] = updatedContact;
        saveContactsToLocalStorage(state.contacts);
      }
    },

    // Action to delete a contact
    deleteContact: (state, action: PayloadAction<number | string>) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
      saveContactsToLocalStorage(state.contacts);
    },

    // Action to get a contact by ID
    getContactById: (state, action: PayloadAction<number>) => {
      state.contact = state.contacts.find(contact => contact.id === action.payload) || {};
    },
  },
});

// Extracting action creators from the contactSlice
export const { addContact, editContact, deleteContact, getContactById } = contactSlice.actions;

// Exporting the reducer function from the slice
export default contactSlice.reducer;