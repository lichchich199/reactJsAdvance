import {
    Form,
    redirect,
    useNavigate
  } from "react-router-dom";
import { createContact } from "./api";
  
  export async function action({ request, params }) {
    const formData = await request.formData();
    const add = Object.fromEntries(formData);
    console.log('formData', add);
    await createContact(add);
    return redirect(`/`);
  }

export default function ProjectAdd() {
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="Name Project"
          aria-label="Name Project"
          type="text"
          name="name"
        />
      </p>
      <label>
        <span>Type</span>
        <input
          type="text"
          name="type"
          placeholder="Xây Dựng"
        />
      </label>
      <label>
        <span>Image URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Image URL"
          type="text"
          name="image"
        />
      </label>
      <label>
        <span>Postal Code</span>
        <input
          placeholder="Postal Code"
          type="text"
          name="postalCode"
        />
      </label>
      <label>
        <span>Number People</span>
        <input
          placeholder="Number People"
          type="text"
          name="numberPeople"
        />
      </label>
      <label>
        <span>Start Date</span>
        <input
          placeholder="Start Date"
          type="text"
          name="startDate"
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={() => {
            navigate(-1);
          }}>Cancel</button>
      </p>
    </Form>
  );
}