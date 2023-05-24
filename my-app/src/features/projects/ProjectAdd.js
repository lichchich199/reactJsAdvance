import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import FormProject from "../../components/project/FormProject";
import { changeStatusAction, createProjectAsync } from "./slices";
// screen add project
export default function ProjectAdd() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
// dispatch action create project and chang status action to handle loading 
  function dispatchAdd(data) {
    dispatch(createProjectAsync(data))
    dispatch(changeStatusAction())
    navigate(`/`);
  }

  return (
    <FormProject onSubmit={dispatchAdd} titleButton='Add'/>
  );
}