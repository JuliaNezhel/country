import {useGetCountriesQuery} from "@/shared/model/api/countries-api";

export const ListCountries = () => {
    const {data} = useGetCountriesQuery();
    return <div>{data? data[0].capital: 'loading'}</div>
}
