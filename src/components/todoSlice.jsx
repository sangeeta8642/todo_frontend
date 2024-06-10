import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await axios.get('https://mytodo-ass1.onrender.com/getTodos');
    return response.data;
});

export const addTodo = createAsyncThunk('todos/addTodo', async (todo) => {
    const response = await axios.post('https://mytodo-ass1.onrender.com/setTodos', todo);
    return response.data;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async (todo) => {
    const response = await axios.put(`https://mytodo-ass1.onrender.com/updateTodos/${todo._id}`, todo);
    return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    await axios.delete(`https://mytodo-ass1.onrender.com/deleteTodos/${id}`);
    return id;
});

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchTodos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.items.push(action.payload);
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const index = state.items.findIndex(todo => todo._id === action.payload._id);
                state.items[index] = action.payload;
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                state.items = state.items.filter(todo => todo._id !== action.payload);
            });
    },
});

export default todoSlice.reducer;
