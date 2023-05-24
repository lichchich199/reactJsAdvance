import ErrorPage from "./components/organisms/ErrorPage";
import Index from "./features/projects";
import Project from "./views/Project"
import ProjectAdd from "./features/projects/ProjectAdd";
import ProjectDetail from "./features/projects/ProjectDetail";
import ProjectEdit from "./features/projects/ProjectEdit";

// define router
export const routes = [
    {
        path: "/",
        element: <Project/>,
        errorElement: <ErrorPage/>,
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
                path: "projects/:projectId/edit",
                element: <ProjectEdit />,
            },
            {
                path: "projects/add",
                element: <ProjectAdd />
            }
        ],
    },
    {
        path: "login",
    }
]
