import { Provider } from "react-redux"
import {RouterProvider} from 'react-router-dom';
import useRoutes from './hooks/useRoutes';
import './main.css'
import store from "./store"

function Main() {
const router = useRoutes()
  return (
    <>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </>
  )
}

export default Main;
