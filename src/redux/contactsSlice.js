import { createSlice, createSelector } from "@reduxjs/toolkit";

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
				contact => contact.id !== action.payload.id
			);
		},
		// setFilter(state, action) {
		// 	state.filters.name = action.payload;
		// },
	},
});

export const selectContactListselectContacts = state => state.contactsOps.items;
export const selectContactListselectNameFilter = state => state.filters.name;
export const selectContactListisLoading = state => state.contactsOps.loading;
export const selectContactListisError = state => state.contactsOps.error;

export const selectFilteredUsers = createSelector(
	[selectContactListselectContacts, selectContactListselectNameFilter],
	(selectContacts, selectNameFilter) => {
		return selectContacts.filter(contact =>
			contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
		);
	}
);

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactReducer = contactsSlice.reducer;
