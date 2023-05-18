import { Provider } from "react-redux"
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import './main.css'
import store from "./store"
import {routes} from './router'

function Main() {
let router = createBrowserRouter(routes)
  return (
    <>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </>
  )
}

export default Main;
