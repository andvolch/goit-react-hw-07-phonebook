import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { filterReducer } from './phonebook/phonebook-filter-reducer';
import contactsSlice  from './phonebook/phonebook-reduser';


export const store = configureStore({
  reducer: {
    phoneBook: contactsSlice,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


export default store;