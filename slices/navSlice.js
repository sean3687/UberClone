import { createSlice } from "@reduxjs/toolkit";


////this is pushing data
const initialState = { //출발과 도착지를 저장해놓음으로써 언제든지 사용할수있도록 설정한다. 
    origin : null,
    destination: null,
    travelTimeInformation : null
}

export const navSlice = createSlice({ //navslice를 이용해서 reducer와 action type을 간편화시켰다. 
    name : 'nav',
    initialState,
    reducer: {
        setOrigin : (state, action) => {
            state.origin = action.payload;
        },
        setDestination : (state, action) =>{
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload; 
        },

    },
});
export const {setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions;

////now we need to configure how to pull the data out
//selector
export const selectOrigin = (state) => state.nav.origin; // it will give const initial state: origin value 
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) => state.nav.travelTimeInformation;

export default navSlice.reducer;