import axios from "axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {albums: []};

export const getInitialState = createAsyncThunk("album/getAlbums", async (_, thunkApi)=>{
    const state = thunkApi.getState();
    if(state.albumReducer.albums.length > 0){
        console.log("returning as it is");
        return state.albumReducer.albums;
    }
    try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/albums");     
        return response.data; 
    } catch (error) {
        console.log("Error");
    }
    
})

export const handleAddAlbum = createAsyncThunk("album/addAlbums", async (payload)=>{
    try {
        let response = await axios.post("https://jsonplaceholder.typicode.com/albums", {
            title: payload.title,
            userId: payload.userId
        },
        {
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        });
        return response.data;
    } catch (error) {
        console.log(`Error in adding -> ${error}`);
    }
})
const albumSlice = createSlice({
    name: "album",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getInitialState.fulfilled, (state, action)=>{
            state.albums = [...action.payload];
        })
        .addCase(handleAddAlbum.fulfilled, (state, action)=>{
            console.log(action.payload);
            state.albums = [action.payload, ...state.albums]
            console.log(state.albums);
        })
    }
});

export const actions = albumSlice.actions;
export const albumReducer = albumSlice.reducer;
export const albumSelector = (state)=> (state.albumReducer);
