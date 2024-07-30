import {useGetCountriesQuery} from "@/shared/model/api/countries-api";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {styled} from '@mui/material/styles';
import {Link} from "react-router-dom";
import {ResponsiveAppBar} from "@/widgets/header/header";
import Container from '@mui/material/Container';

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const ListCountries = () => {
    const {data: countries} = useGetCountriesQuery();


    return <div>
        <ResponsiveAppBar/>
        <Container>

            <Box sx={{width: '100%', m: 2}}>
                <Stack spacing={2}>
                    {countries?.map((country) => {
                        return <Item key={country.name.common}><Link
                            to={`${country.name.common}`}>{country.name.official}</Link></Item>
                    })}
                </Stack>
            </Box>
        </Container>
    </div>
}
