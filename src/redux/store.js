import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { filterReducer } from './Phonebook/phonebook-filter-reducer';
import contactsSlice  from './Phonebook/phonebook-reduser';


export const store = configureStore({
  reducer: {
    phoneBook: contactsSlice,
    filter: filterReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});


export default store;