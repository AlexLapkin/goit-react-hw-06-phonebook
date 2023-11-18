import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = '';

const filterSlice = createSlice({
    // Ім'я слайсу
    name: "filter",
  // Початковий стан редюсера слайсу 
    initialState: filterInitialState,
  // Об'єкт редюсерів
  reducers: {
      setFilter(state, { payload }) {
          return payload;
    },
  },
});

// Генератори екшн-креаторс
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;