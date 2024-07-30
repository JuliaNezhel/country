import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Country} from "./country/country";
import {ListCountries} from "./list-countries/list-countries";

const router = createBrowserRouter([
    {
        path: '/',
        element: <ListCountries/>,
    },
    {
        path: '/:country',
        element: <Country/>,
    },
])

export const Router = () => {
    return <RouterProvider router={router}/>
}
