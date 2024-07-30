import { Link } from 'react-router-dom'

import { useGetCountriesQuery } from '@/shared/model/api/countries-api'
import { ResponsiveAppBar } from '@/widgets/header/header'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  padding: theme.spacing(1),
  textAlign: 'center',
}))

export const ListCountries = () => {
  const { data: countries } = useGetCountriesQuery()

  return (
    <div>
      <ResponsiveAppBar />
      <Container>
        <Box sx={{ m: 2, width: '100%' }}>
          <Stack spacing={2}>
            {countries?.map(country => {
              return (
                <Item key={country.name.common}>
                  <Link to={`${country.name.common}`}>{country.name.official}</Link>
                </Item>
              )
            })}
          </Stack>
        </Box>
      </Container>
    </div>
  )
}
