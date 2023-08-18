import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalSlice } from './modalsType';

const initialState: IModalSlice = {
  loginModal: {
    data: '',
    name: 'Hello',
    isOpen: false,
  },
};

export const { actions, reducer } = createSlice({
  name: 'modals',
  initialState: initialState,
  reducers: {
    openLoginModal: (
      state,
      action: PayloadAction<IModalSlice['loginModal']>,
    ) => {
      state.loginModal.isOpen = action.payload.isOpen;
      state.loginModal.data = action.payload.data;
      state.loginModal.name = action.payload.name;
    },
  },
});

export const { openLoginModal } = actions;
