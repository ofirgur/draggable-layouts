import { createSlice } from '@reduxjs/toolkit';

export const layoutsSlice = createSlice({
    name: 'layout',
    initialState: {
        //layouts: [[{ i: 0, x: 0, y: 0, w: 2, h: 2, type: 'aqua', static: true }]],
        layouts: [],
        editableLayout: null,
        editableIndex: null
    },
    reducers: {
        addLayout: (state, action) => {
            if(state.editableLayout) {
                state.layouts[state.editableIndex] = action.payload;
            } else {
                state.layouts.push(action.payload);
            }
            
            state.editableLayout = null;
            state.editableIndex = null;
        },
        setEditableLayout: (state, action) => {
            const index = action.payload;

            state.editableLayout = state.layouts[index];
            state.editableIndex = index;
        },
        resetEditableLayout: state => {
            state.editableLayout = null;
            state.editableIndex = null;
        }
    },
});

// actions
export const { addLayout, setEditableLayout, resetEditableLayout } = layoutsSlice.actions;

// selectors
export const selectLayouts = state => state.layout.layouts;

export const selectEditableLayout = state => state.layout.editableLayout;

export default layoutsSlice.reducer;

