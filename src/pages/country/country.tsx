import {useParams} from "react-router-dom";
import {useGetCountryQuery} from "@/shared/model/api/countries-api";
import {ResponsiveAppBar} from "@/widgets/header/header";
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import {ErrorDataType} from "@/shared/type/countries.type";

export const Country = () => {
    const {country} = useParams<{ country: string }>()
    const {data, error, isLoading} = useGetCountryQuery(country ? country : '');


    if (error) {
        if ("data" in error) {
            const errMsg = error.data as ErrorDataType;
            if ("message" in errMsg) {
                console.log(error)
                return <>
                    <ResponsiveAppBar/>
                    <Alert variant="filled" severity="error">
                        {errMsg.message}
                    </Alert>
                </>
            }
        }
    }

    return <div>
        <ResponsiveAppBar/>
        <Container>
            {isLoading ? <CircularProgress/> : data?.map((country) => (
                <><CardMedia
                    component="img"
                    height="300"
                    image={country.flags.svg}
                    alt={country.flags?.alt}
                />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {country.name.common}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {country.name.official}
                        </Typography>
                    </CardContent>
                </>
            ))}

        </Container>
    </div>
}
