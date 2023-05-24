import {
    useNavigate,
    useParams
  } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeStatusAction, getProjectAsync, updateProjectAsync } from "./slices";
import FormProject from "../../components/project/FormProject";
  
export default function ProjectEdit() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {project} = useSelector(state => state.project);
  const { projectId } = useParams()

  // dispatch action get project to view
  useEffect(() => {
    dispatch(getProjectAsync({projectId: projectId}))
  }, [projectId])

  // dispatch action update project and dispatch action to handle loading
  function dispatchEdit(data) {
      dispatch(updateProjectAsync(data))
      dispatch(changeStatusAction())
      navigate(-1);
  }
  return (
    <FormProject valuesEdit={project} onSubmit={dispatchEdit} titleButton='Edit'/>
  );
}