import { Provider } from "react-redux"
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import './main.css'
import 'bootstrap/dist/css/bootstrap.css'
import store from "./store"
import {routes} from './router'
import Routing from "./Routing";

function Main() {
let router = createBrowserRouter(routes)
  return (
    <>
        <Provider store={store}>
            <Routing>
                <RouterProvider router={router} />
            </Routing>
        </Provider>
    </>
  )
}

export default Main;
