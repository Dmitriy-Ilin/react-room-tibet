import { createSlice } from "@reduxjs/toolkit"

const initialState = [
    {id: 1, active: false},
    {id: 2, active: false},
    {id: 3, active: false},
    {id: 4, active: false},
    {id: 5, active: false},
    {id: 6, active: false},
]

export const gallerySlice = createSlice({
    name: 'gallery',
    initialState,
    reducers: {
        toggleActive: (state, action) => {
            const selectedItem = state.find(item => item.id === action.payload);
            selectedItem.active = !selectedItem.active;
        }
    }
})

export const {toggleActive} = gallerySlice.actions;
export default gallerySlice.reducer;

