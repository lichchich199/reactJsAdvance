import {
    useNavigate,
  } from "react-router-dom";
import FormProject from "../../components/project/FormProject";
import { changeStatusAction, createProjectAsync } from "./slices";
import { useDispatch } from "react-redux";
  
export default function ProjectAdd() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  function dispatchAdd(data) {
    dispatch(createProjectAsync(data))
    dispatch(changeStatusAction())
    navigate(`/`);
  }

  return (
    <FormProject onSubmit={dispatchAdd} titleButton='Add'/>
  );
}