import { Link } from 'react-router-dom'

import { Item } from '@/entities/ui/item'
import { useGetCountriesQuery } from '@/shared/model/api/countries-api'
import { ResponsiveAppBar } from '@/widgets/header/header'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

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
                  <Link style={{ color: 'black' }} to={`${country.name.common}`}>
                    {country.name.official}
                  </Link>
                </Item>
              )
            })}
          </Stack>
        </Box>
      </Container>
    </div>
  )
}
