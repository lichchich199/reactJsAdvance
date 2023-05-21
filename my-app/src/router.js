import ErrorPage from "./components/organisms/ErrorPage";
import Index from "./features/projects";
import Project, {loader as rootLoader, action as rootAction} from "./views/Project"
import ProjectAdd, { action as addAction } from "./features/projects/ProjectAdd";
import ProjectDetail, { loader as contactLoader } from "./features/projects/ProjectDetail";
import ProjectEdit, { action as editAction} from "./features/projects/ProjectEdit";
import { action as deleteAction } from "./features/projects/ProjectDelete";
import Login from "./views/Login";


export const routes = [
    {
        path: "/",
        element: <Project/>,
        errorElement: <ErrorPage/>,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                index: true,
                element: <Index/>
            },
            {
                path: "projects/:projectId",
                element: <ProjectDetail />
            },
            {
                path: "projects/:contactId/edit",
                element: <ProjectEdit />,
                loader: contactLoader,
                action: editAction
            },
            {
                path: "projects/add",
                element: <ProjectAdd />,
                action: addAction
            },
            {
                path: "projects/:contactId/delete",
                action: deleteAction,
                errorElement: <div>Oops! There was an error.</div>,
            }
        ],
    },
    {
        path: "login",
        element: <Login />,
    }
]