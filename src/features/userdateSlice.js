// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // create action for fetching user data from an API
// export const creatUser = createAsyncThunk(
//   "creatUser",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await fetch("", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       return result;

//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// // ShowAll user 
// export const fetchUsers = createAsyncThunk('fetchUsers', async (_, { rejectWithValue }) => {
//   const response = await fetch("");

//   try {
//     const result = await response.json();
//     return result;

//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// })

// // Delete user
// export const DeleteUsers = createAsyncThunk('DeleteUsers', async (id, { rejectWithValue }) => {
//   const response = await fetch(``, { method: "DELETE" });

//   try {
//     const result = await response.json();
//     return result;

//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// })

// // update action for updating user data
// export const UpdateUsers = createAsyncThunk(
//   "UpdateUsers",
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await fetch(``, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();
//       return result;

//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );


// export const userDate = createSlice({
//   name: "userDate",
//   initialState: {
//     users: [],
//     loading: false,
//     error: null,
//   },

//   // ✅ NEW builder syntax
//   extraReducers: (builder) => {
//     builder
//       //for create user
//       .addCase(creatUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(creatUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.users.push(action?.payload);
//       })
//       .addCase(creatUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload.message;
//       })

//       //for ShowAll user
//       .addCase(fetchUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         state.users = action.payload;
//       })
//       .addCase(fetchUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // for Delete user
//       .addCase(DeleteUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(DeleteUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         const { id } = action.payload
//         if (id) {
//           state.users = state.users.filter((user) => user.id !== id);
//         }
//       })
//       .addCase(DeleteUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       // for Update user
//       .addCase(UpdateUsers.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(UpdateUsers.fulfilled, (state, action) => {
//         state.loading = false;
//         const updatedUser = action.payload;

//         state.users = state.users.map((user) =>
//           user.id === updatedUser.id ? updatedUser : user
//         );
//       })
//       .addCase(UpdateUsers.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//   },
// });

// export default userDate.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

// CREATE user
export const creatUser = createAsyncThunk(
  "creatUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(API_URL, data);
      return response.data;

    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// GET all users
export const fetchUsers = createAsyncThunk(
  "fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;

    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// DELETE user
export const DeleteUsers = createAsyncThunk(
  "DeleteUsers",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;

    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// UPDATE user
export const UpdateUsers = createAsyncThunk(
  "UpdateUsers",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/${data.id}`, data);
      return response.data;

    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);



export const userDate = createSlice({
  name: "userDate",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },

  extraReducers: (builder) => {
    builder
      // create user
      .addCase(creatUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(creatUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(creatUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // fetch all users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete user
      .addCase(DeleteUsers.fulfilled, (state, action) => {
        const { id } = action.payload;
        state.users = state.users.filter((user) => user.id !== id);
      })

      // Update user
      .addCase(UpdateUsers.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        state.users = state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
      });
  },
});

export default userDate.reducer;
