import { createSlice } from '@reduxjs/toolkit';

const zindexSlice = createSlice({
    name: "zindex",
    initialState: {
        index:null
    },
    reducers: {
        funtrue: (state, action) => {
            state.index = true;
        },
        funfalse: (state, action) => {
            state.index = false;
        }
    },
});

export const { funtrue, funfalse } = zindexSlice.actions
export default zindexSlice.reducer;
