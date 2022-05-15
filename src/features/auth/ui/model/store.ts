import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../../../@app';

const STORAGE_USER = '@storage_user';

type User = {
  password: string;
  email: string;
  name: string;
} | null;

export interface AuthState {
  loading: boolean;
  user: User;
  loginForm: {
    password: string;
    email: string;
  };
  registerForm: {
    repassword: string;
    password: string;
    email: string;
  };
}

const initialState: AuthState = {
  loginForm: {
    password: '',
    email: '',
  },
  registerForm: {
    repassword: '',
    password: '',
    email: '',
  },
  loading: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateLoginForm: (
      state,
      {
        payload,
      }: PayloadAction<{value: string; type: keyof AuthState['loginForm']}>,
    ) => {
      state.loginForm[payload.type] = payload.value;
    },
    updateRegisterForm: (
      state,
      {
        payload,
      }: PayloadAction<{value: string; type: keyof AuthState['registerForm']}>,
    ) => {
      state.registerForm[payload.type] = payload.value;
    },
  },
  extraReducers: builder => {
    // loginThunk and registerThunk
    builder
      .addCase(loginThunk.pending, state => {
        state.loading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        console.log('end login', action.payload);
      });

    builder
      .addCase(registerThunk.pending, state => {
        state.loading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        console.log('end register', action.payload);
      })
      .addCase(registerThunk.rejected, (state, payload) => {
        console.error(payload.error.message);
      });
    // meThunk
    builder
      .addCase(meThunk.pending, state => {
        state.loading = true;
      })
      .addCase(meThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      });

    // logoutThunk
    builder.addCase(logoutThunk.fulfilled, state => {
      state.user = null;
    });
  },
});

// thukns
export const registerThunk = createAsyncThunk<User>(
  'auth/register',
  async (_, {getState}) => {
    const state = getState() as RootState;
    const form = state.auth.registerForm;
    if (form.password !== form.repassword) {
      throw new Error('The password does not match the repeated password!');
    }
    const user: User = {
      email: form.email,
      password: form.password,
      name: 'tester',
    };
    await AsyncStorage.setItem(STORAGE_USER, JSON.stringify(user));
    return user;
  },
);

export const loginThunk = createAsyncThunk<User>(
  'auth/login',
  async (_, {getState}) => {
    const state = getState() as RootState;
    const user: User = {
      email: state.auth.loginForm.email,
      password: state.auth.loginForm.password,
      name: 'tester',
    };
    await AsyncStorage.setItem(STORAGE_USER, JSON.stringify(user));
    return user;
  },
);

export const meThunk = createAsyncThunk<User>('auth/me', async () => {
  const userJson = await AsyncStorage.getItem(STORAGE_USER);
  if (userJson) {
    return JSON.parse(userJson);
  }
  return null;
});

export const logoutThunk = createAsyncThunk('auth/logout', async () => {
  await AsyncStorage.removeItem(STORAGE_USER);
});

// Action creators are generated for each case reducer function
export const {updateLoginForm, updateRegisterForm} = authSlice.actions;

export default authSlice.reducer;
