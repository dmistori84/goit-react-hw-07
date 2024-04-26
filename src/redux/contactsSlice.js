import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
	items: [],
};

const contactsSlice = createSlice({
	// Ім'я слайсу
	name: "contacts",
	// Початковий стан редюсера слайсу
	initialState,
	// Об'єкт редюсерів
	reducers: {
		addContact(state, action) {
			state.items.push(action.payload);
		},
		deleteContact(state, action) {
			state.items = state.items.filter(
				contact => contact.id !== action.payload
			);
		},
		// setFilter(state, action) {
		// 	state.filters.name = action.payload;
		// },
	},
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactReducer = contactsSlice.reducer;
