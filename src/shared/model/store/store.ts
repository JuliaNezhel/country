import { configureStore } from '@reduxjs/toolkit'

import { countriesApi } from '../api/countries-api'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(countriesApi.middleware),
  reducer: {
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
})
