import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    // Ім'я слайсу
    name: "contacts",
    // Початковий стан редюсера слайсу
    initialState: [],
    // Об'єкт редюсерів
    reducers: {
        addContact(state, {payload}) { state.contacts = [...state.contacts, payload]; },
        deleteContact(state, {payload}) {
            state.contacts = state.contacts.filter(
            contact => contact.id !== payload
        ) },
    },
});

// Генератори екшн-креаторс
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;