import { Sidebar } from './slice';

const selectSidebar = {
  getSidebar: (state: any) => state?.ContactSlice as Sidebar,
};

export default selectSidebar;
