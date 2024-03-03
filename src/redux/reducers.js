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

export const updateResource = createAsyncThunk("album/updateAlbum", async (payload)=>{

    try {
        
        let response = await axios.put(`https://jsonplaceholder.typicode.com/albums/${payload.id}`, {
            title: payload.title,
            userId: payload.userId
        });

        console.log(response.data);
        return response.data;
    } catch (error) {
        return payload;
        
    }

    
})

export const deleteResource = createAsyncThunk("album/delete", async (payload)=>{
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/albums/${payload.id}`);
        console.log(payload.id);
        return payload.id

    } catch (error) {
        console.log(`Delete: ${error}`);
        return payload.id;
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
        .addCase(updateResource.fulfilled, (state, action)=>{
            
            console.log(action.payload);
            const index = state.albums.findIndex(album => album.id === parseInt(action.payload.id));
            console.log(index);
            if(index === -1){
                console.log("400 not found");
            }else{
                
                state.albums[index] = action.payload;
                console.log("Array updated ");
                console.log(action.payload);
            }
        })
        .addCase(deleteResource.fulfilled, (state, action)=>{
            let filteredArray = state.albums.filter(item=> item.id === action.payload);
            state.albums.splice(filteredArray, 1);
        })
        
    }
});

export const actions = albumSlice.actions;
export const albumReducer = albumSlice.reducer;
export const albumSelector = (state)=> (state.albumReducer);
