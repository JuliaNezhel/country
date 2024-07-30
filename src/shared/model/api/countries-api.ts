import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {Root} from "../../type/countries.type";

export const countriesApi = createApi({
    reducerPath: 'countriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://restcountries.com/v3.1/',

    }),
    tagTypes: ['Countries'],
    endpoints: builder => {
        return {
            getCountries: builder.query<Root[], void>({
                query: () => ({
                    url: '/all',
                    method: 'GET',
                }),
                providesTags: ['Countries'],
            }),
        }
    },
})

export const { useGetCountriesQuery } = countriesApi
