import { Outlet } from "react-router-dom";

import ProjectList from "../features/projects/ProjectList";

export default function Project() {
    return (
        <>
          <div id="sidebar">
            <ProjectList/>
          </div>
          <div id="detail">
            <Outlet/>
        </div>
        </>
      );
    }