import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {albums: []};

export const getInitialState = createAsyncThunk("album/addAlbums", async ()=>{
    try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/albums");     
        return response; 
    } catch (error) {
        console.log("Error");
    }
    
})
const albumSlice = createSlice({
    name: "album",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getInitialState.fulfilled, (state, action)=>{
            state.albums = [...action.payload.data];
        })
    }
});

export const actions = albumSlice.actions;
export const albumReducer = albumSlice.reducer;
export const albumSelector = (state)=> (state.albumReducer);
