import { Provider } from 'react-redux'

import { Router } from '@/pages/routing'
import { store } from '@/shared/model/store/store'

export function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
