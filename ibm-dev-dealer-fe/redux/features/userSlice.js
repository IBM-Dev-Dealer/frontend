import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  logged: false,
};

// export const registerUser = createAsyncThunk(
//   registerUserAction,
//   async (userData, { rejectWithValue }) => {
//     try {
//       const res = await register(userData, rejectWithValue);
//       return res;
//     } catch (error) {
//       console.log(error);
//     }
//   },
// );

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // title:
  },
//   extraReducers: (builder) => {
//     builder.addCase(registerUser.pending, (state) => {
//       state.loading = true;
//       state.error = '';
//     });

//     builder.addCase(registerUser.fulfilled, (state, { payload }) => {
//       state.loading = false;
//       state.logged = true;
//       state.error = '';
//       addTokenToCookie(payload.token);
//     });
//     builder.addCase(registerUser.rejected, (state, { payload }: { payload: any }) => {
//       state.loading = false;
//       state.error = payload;
//     });

//     builder.addCase(loginUser.pending, (state) => {
//       state.loading = true;
//       state.error = '';
//     });
//   },
});

export default userSlice.reducer;
