import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces"

const covidSlice = createSlice({
    name: "Covid Slice",
    initialState: {
        covid: data,
    },
    reducers: {
        addCovid(state, action) {
            state.covid.push(action.payload)
        },
        deletedCovid() {
        },
        updateCovid(state, action) {
            state.covid = action.payload;
        },
    },
});

//gemerate action dan reducers
const { addCovid, deletedCovid, updateCovid } = covidSlice.actions;
const covidReducer = covidSlice.reducer;

export { addCovid, deletedCovid, updateCovid };
export default covidReducer;
