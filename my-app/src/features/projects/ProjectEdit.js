import {
    Form,
    useLoaderData,
    redirect,
    useNavigate
  } from "react-router-dom";
import { updateProject } from "./api";
  
  export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    console.log('formData', updates);
    // const updates = Object.fromEntries(formData);
    await updateProject(updates);
    return redirect(`/projects/${params.projectId}`);
  }

export default function ProjectEdit() {
  const { contact } = useLoaderData();
  const navigate = useNavigate();
  console.log('contact- line 18', contact)

  return (
    <Form method="post" id="contact-form">
      <p>

        <span>Name</span>
        <input
          placeholder="Name Project"
          aria-label="Name Project"
          type="text"
          name="name"
          defaultValue={contact.name}
        />
      </p>
      <label>
        <span>Type</span>
        <input
          type="text"
          name="type"
          placeholder="Xây Dựng"
          defaultValue={contact.type}
        />
      </label>
      <label>
        <span>Image URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Image URL"
          type="text"
          name="image"
          defaultValue={contact.image}
        />
      </label>
      <label>
        <span>Postal Code</span>
        <input
          placeholder="Postal Code"
          type="text"
          name="postalCode"
          defaultValue={contact.postalCode}
        />
      </label>
      <label>
        <span>Number People</span>
        <input
          placeholder="Number People"
          type="text"
          name="numberPeople"
          defaultValue={contact.numberPeople}
        />
      </label>
      <label>
        <span>Start Date</span>
        <input
          placeholder="Start Date"
          type="text"
          name="startDate"
          defaultValue={contact.start_date}
        />
      </label>
        <input
            type="hidden"
            name="id"
            value={contact.id}
            />
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>
    </Form>
  );
}