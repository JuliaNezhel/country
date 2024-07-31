import { useParams } from 'react-router-dom'

import { Item } from '@/entities/ui/item'
import { useGetCountryQuery } from '@/shared/model/api/countries-api'
import { ErrorDataType } from '@/shared/type/countries.type'
import { ResponsiveAppBar } from '@/widgets/header/header'
import Alert from '@mui/material/Alert'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export const Country = () => {
  const { country } = useParams<{ country: string }>()
  const { data, error, isLoading } = useGetCountryQuery(country ? country : '')

  if (error) {
    if ('data' in error) {
      const errMsg = error.data as ErrorDataType

      if ('message' in errMsg) {
        // console.log(error)

        return (
          <>
            <ResponsiveAppBar />
            <Alert severity={'error'} variant={'filled'}>
              {errMsg.message}
            </Alert>
          </>
        )
      }
    }
  }

  return (
    <div>
      <ResponsiveAppBar />
      <Container>
        {isLoading ? (
          <CircularProgress />
        ) : (
          data?.map(country => (
            <>
              <Item>
                <CardMedia
                  alt={country.flags?.alt}
                  component={'img'}
                  height={'300'}
                  image={country.flags.svg}
                />
                <CardContent>
                  <Typography component={'div'} gutterBottom variant={'h5'}>
                    {country.name.common}
                  </Typography>
                  <Typography color={'text.secondary'} variant={'body2'}>
                    {country.name.official}
                  </Typography>
                </CardContent>
              </Item>
            </>
          ))
        )}
      </Container>
    </div>
  )
}
