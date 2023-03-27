import { createSlice } from '@reduxjs/toolkit';

import { dispatch } from '../store';

export interface Sidebar {
  open: boolean;
  type: string;
}

const initialState: Sidebar = {
  open: false,
  type: 'CONTACT',
};

export const ContactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.open = !state.open;
    },
    updateSidebar(state, action) {
      state.type = action.payload.type;
    },
  },
});

export const { toggleSidebar, updateSidebar } = ContactSlice.actions;

export const namespace = 'ContactSlice';

export default ContactSlice.reducer;
