import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  posts: [],
}

export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    dispatch(setPosts(res.data))
  }
)

export const removePostsById = createAsyncThunk(
  'posts/removePostsById',
  async (id, { rejectWithValue, dispatch }) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    dispatch(removePosts(id))
  }
)

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload
    },
    removePosts: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload)
    },
  },
  extraReducers: {
    [getPosts.fulfilled]: () => console.log('get: fulfilled'),
    [getPosts.pending]: () => console.log('get: pending'),
    [getPosts.rejected]: () => console.log('get: rejected'),
    [removePostsById.fulfilled]: () => console.log('delete: fulfilled'),
    [removePostsById.pending]: () => console.log('delete: pending'),
    [removePostsById.rejected]: () => console.log('delete: rejected'),
  },
})

export const { setPosts, removePosts } = postSlice.actions
export default postSlice.reducer
