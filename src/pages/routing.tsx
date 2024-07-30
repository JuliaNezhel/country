import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Country } from './country/country'
import { ListCountries } from './list-countries/list-countries'

const router = createBrowserRouter([
  {
    element: <ListCountries />,
    path: '/',
  },
  {
    element: <Country />,
    path: '/:country',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
