import { createBrowserRouter } from "react-router-dom";
import Order from "../views/Order";
import ErrorPage from "../components/organisms/ErrorPage";
import Contact from "../features/contact/Contact";
import Root, {loader as rootLoader, action as rootAction} from "../features/contact/Root";
import { loader as contactLoader } from "../features/contact/Contact";
import EditContact, { action as editAction} from "../features/contact/edit";
import { action as destroyAction } from "../features/contact/destroy";
import Index from "../features/contact";

const useRoutes = () => {
    let element = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            errorElement: <ErrorPage/>,
            loader: rootLoader,
            action: rootAction,
            children: [
                {
                    index: true,
                    element: <Index/>
                },
                {
                    path: "contacts/:contactId",
                    element: <Contact />,
                    loader: contactLoader
                },
                {
                    path: "contacts/:contactId/edit",
                    element: <EditContact />,
                    loader: contactLoader,
                    action: editAction
                },
                {
                    path: "contacts/:contactId/destroy",
                    action: destroyAction,
                    errorElement: <div>Oops! There was an error.</div>,
                },
            ]
        },
      ]);
      return element;
}
 
export default useRoutes;