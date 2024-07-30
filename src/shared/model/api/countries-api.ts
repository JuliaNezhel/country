import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Root } from '../../type/countries.type'

export const countriesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://restcountries.com/v3.1/',
  }),
  endpoints: builder => {
    return {
      getCountries: builder.query<Root[], void>({
        providesTags: ['Countries'],
        query: () => ({
          method: 'GET',
          url: '/all',
        }),
      }),
      getCountry: builder.query<Root[], string>({
        providesTags: ['Countries'],
        query: country => ({
          method: 'GET',
          url: `/name/${country}`,
        }),
      }),
    }
  },
  reducerPath: 'countriesApi',
  tagTypes: ['Countries'],
})

export const { useGetCountriesQuery, useGetCountryQuery } = countriesApi
