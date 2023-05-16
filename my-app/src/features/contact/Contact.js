import { Form, useLoaderData } from "react-router-dom";

import { getContact } from "./api";

export async function loader({ params }) {
    console.log(params)
    const contact = await getContact(params);
    console.log('contact', contact)
    return { contact };
    // return {}
  }

export default function Contact() {
    const { contact } = useLoaderData();
    console.log('contact:', contact)

  return (
    <div id="contact">
      <div>
        <img
          key={contact.image}
          src={contact.image || null}
        />
      </div>

      <div>
        <h1>
          {contact.type || contact.name ? (
            <>
              {contact.type} {contact.name}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.numberPeople && <p>Number People: {contact.numberPeople}</p>}
        {contact.postalCode && <p>Postal Code: {contact.postalCode}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}