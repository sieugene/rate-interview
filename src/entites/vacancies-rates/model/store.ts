import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../../@app';
import {VacancyRate} from './types';
import uuid from 'react-native-uuid';

const STORAGE_VACANCIES_RATES = '@storage_vacancies-rates';

export interface VacanciesRatesState {
  rates: VacancyRate[];
  loading: boolean;
}

const initialState: VacanciesRatesState = {
  rates: [],
  loading: false,
};

export const vacanciesRatesSlice = createSlice({
  name: 'vacancies-rates',
  initialState,
  reducers: {
    add: (
      state,
      {
        payload,
      }: PayloadAction<{
        rate: Omit<VacancyRate, 'id'>;
      }>,
    ) => {
      state.rates = [
        ...state.rates,
        {
          ...payload.rate,
          id: uuid.v4()?.toString(),
        },
      ];
    },
    remove: (
      state,
      {
        payload,
      }: PayloadAction<{
        rateId: VacancyRate['id'];
      }>,
    ) => {
      state.rates = state.rates.filter(rate => payload.rateId !== rate.id);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getRates.pending, state => {
        state.loading = true;
      })
      .addCase(getRates.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.rates = payload;
      })
      .addCase(getRates.rejected, (_, payload) => {
        console.error(payload.error.message);
      });

    builder
      .addCase(addRate.pending, state => {
        state.loading = true;
      })
      .addCase(addRate.fulfilled, state => {
        state.loading = false;
      });

    builder
      .addCase(removeRate.pending, state => {
        state.loading = true;
      })
      .addCase(removeRate.fulfilled, state => {
        state.loading = false;
      });
  },
});

// Action creators are generated for each case reducer function
const {add, remove} = vacanciesRatesSlice.actions;

// thukns
export const getRates = createAsyncThunk(
  'vacancies-rates/getRates',
  async () => {
    const ratesJson = await AsyncStorage.getItem(STORAGE_VACANCIES_RATES);
    if (ratesJson) {
      return JSON.parse(ratesJson) as VacancyRate[];
    }
    return [];
  },
);

export const saveRates = createAsyncThunk(
  'vacancies-rates/saveRates',
  async (_, {getState}) => {
    const state = getState() as RootState;
    const rates = state.vacanciesRates.rates;
    await AsyncStorage.setItem(STORAGE_VACANCIES_RATES, JSON.stringify(rates));
  },
);

export const addRate = createAsyncThunk<void, {rate: Omit<VacancyRate, 'id'>}>(
  'vacancies-rates/addRate',
  async ({rate}, {dispatch}) => {
    dispatch(add({rate}));
    await dispatch(saveRates());
  },
);

export const removeRate = createAsyncThunk<void, {rateId: VacancyRate['id']}>(
  'vacancies-rates/removeRate',
  async ({rateId}, {dispatch}) => {
    dispatch(remove({rateId}));
    await dispatch(saveRates());
  },
);

export default vacanciesRatesSlice.reducer;
