import { createSlice } from "@reduxjs/toolkit";

// const zindexSlice = createSlice({
//     name: "zindex",
//     initialState: {
//         index:null
//     },
//     reducers: {
//         funtrue: (state, action) => {
//             state.index = true;
//         },
//         funfalse: (state, action) => {
//             state.index = false;
//         }
//     },
// });

// export const { funtrue, funfalse } = zindexSlice.actions
// export default zindexSlice.reducer;


const initialState = {
    value: null,
    valueTwo: null,
};

const searchSlice = createSlice({
    name: "searchTerm",
    initialState,
    reducers: {
        searchAdd: (state, action) => {
            state.value = action.payload;
            state.valueTwo = action.payload;
        },
    },
});

export const { searchAdd } = searchSlice.actions

export default searchSlice.reducer