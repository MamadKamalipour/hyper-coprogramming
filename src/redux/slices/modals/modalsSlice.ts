import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IModalSlice } from './modalsType';

const initialState: IModalSlice = {
  loginModal: {
    data: '',
    isOpen: false,
  },
};

export const { actions, reducer } = createSlice({
  name: 'modals',
  initialState: initialState,
  reducers: {
    openLoginModal: (
      state,
      action: PayloadAction<{ isOpen: boolean; data: string }>,
    ) => {
      state.loginModal.isOpen = action.payload.isOpen;
      state.loginModal.data = action.payload.data;
    },
  },
});

export const { openLoginModal } = actions;
