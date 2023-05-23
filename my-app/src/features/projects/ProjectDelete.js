import { redirect } from "react-router-dom";
import { deleteProject } from "./api";

export async function action({ params }) {
  await deleteProject(parseInt(params.projectId));
  return redirect("/");
}