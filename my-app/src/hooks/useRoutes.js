import { createBrowserRouter } from "react-router-dom";
import Order from "../views/Order";
import ErrorPage from "../components/organisms/ErrorPage";
import Contact from "../features/contact/Contact";
import Root, {loader as rootLoader} from "../features/contact/Root";

const useRoutes = () => {
    let element = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            errorElement: <ErrorPage/>,
            loader: rootLoader,
            children: [
                {
                    path: "contacts/:contactId",
                    element: <Contact />,
                },
            ]
        },
      ]);
      return element;
}
 
export default useRoutes;