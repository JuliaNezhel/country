import {useParams} from "react-router-dom";

export const Country = () => {

    const {country} = useParams<{ country: string }>()
    return <div>{country}</div>
}
