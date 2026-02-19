
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState{
  items: string[]
}

const initialState : FavoritesState = {
  items: []
}

const  FavoritesSlice = createSlice({
    name:'favorites',
    initialState,
    reducers: {
        addFavorites:(state, action: PayloadAction<string>) => {
           if(!state.items.includes(action.payload)){
              state.items.push(action.payload);
           }
        },

        removeFavorites: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item !== action.payload);
        },
    },
})

export const {addFavorites, removeFavorites} = FavoritesSlice.actions;

export default FavoritesSlice.reducer; 