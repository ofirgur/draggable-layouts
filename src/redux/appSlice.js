import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
      title: '',
    },
    reducers: {
        setTitle: (state, action) => {
            state.title = action.payload;
        }
    },
});

// actions
export const { setTitle } = appSlice.actions;

// selectors
export const selectTitle = state => state.app.title;

export default appSlice.reducer;