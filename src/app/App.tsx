import {Provider} from 'react-redux'

import {store} from "../shared/model/store/store";
import {Router} from "../pages/routing";


export function App() {
    return (
        <Provider store={store}>
            <Router/>
        </Provider>
    )
}
