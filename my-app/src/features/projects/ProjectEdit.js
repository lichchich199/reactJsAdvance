import {
    Form,
    useLoaderData,
    redirect,
    useNavigate,
    useParams
  } from "react-router-dom";
import { updateProject } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeStatusAction, getProjectAsync, updateProjectAsync } from "./slices";
import FormProject from "../../components/project/FormProject";
  
  export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    console.log('formData', updates);
    // const updates = Object.fromEntries(formData);
    await updateProject(updates);
    return redirect(`/projects/${params.projectId}`);
  }

export default function ProjectEdit() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {project} = useSelector(state => state.project);
  const { projectId } = useParams()

  useEffect(() => {
    dispatch(getProjectAsync({projectId: projectId}))
  }, [projectId])

  function dispatchEdit(data) {
      dispatch(updateProjectAsync(data))
      dispatch(changeStatusAction())
      navigate(-1);
  }
  return (
    // <Form method="post" id="contact-form">
    //   <p>

    //     <span>Name</span>
    //     <input
    //       placeholder="Name Project"
    //       aria-label="Name Project"
    //       type="text"
    //       name="name"
    //       defaultValue={project.name}
    //     />
    //   </p>
    //   <label>
    //     <span>Type</span>
    //     <input
    //       type="text"
    //       name="type"
    //       placeholder="Xây Dựng"
    //       defaultValue={project.type}
    //     />
    //   </label>
    //   <label>
    //     <span>Image URL</span>
    //     <input
    //       placeholder="https://example.com/avatar.jpg"
    //       aria-label="Image URL"
    //       type="text"
    //       name="image"
    //       defaultValue={project.image}
    //     />
    //   </label>
    //   <label>
    //     <span>Postal Code</span>
    //     <input
    //       placeholder="Postal Code"
    //       type="text"
    //       name="postalCode"
    //       defaultValue={project.postalCode}
    //     />
    //   </label>
    //   <label>
    //     <span>Number People</span>
    //     <input
    //       placeholder="Number People"
    //       type="text"
    //       name="numberPeople"
    //       defaultValue={project.numberPeople}
    //     />
    //   </label>
    //   <label>
    //     <span>Start Date</span>
    //     <input
    //       placeholder="Start Date"
    //       type="text"
    //       name="startDate"
    //       defaultValue={project.start_date}
    //     />
    //   </label>
    //     <input
    //         type="hidden"
    //         name="id"
    //         value={project.id}
    //         />
    //   <p>
    //     <button type="submit">Save</button>
    //     <button type="button" onClick={() => {
    //         navigate(-1);
    //       }}>Cancel</button>
    //   </p>
    // </Form>
    <FormProject valuesEdit={project} onSubmit={dispatchEdit} titleButton='Edit'/>
  );
}