import { Outlet, useLoaderData, NavLink, Form, useNavigation, useSubmit } from "react-router-dom";
import { getContacts, createContact } from './api';
import { useEffect, useState } from "react";

export async function loader({request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts, q };
  }

export async function action() {
    const contact = await createContact();
    return { contact };
}

export default function Root() {
    const { contacts, q} = useLoaderData();
    const [query, setQuery] = useState(q);
    const navigation = useNavigation();
    console.log('contact:', contacts)
    useEffect(() => {
        setQuery(q);
      }, [q]);
      const submit = useSubmit();
      const searching =
      navigation.location &&
      new URLSearchParams(navigation.location.search).has(
        "q"
      );
    return (
        <>
          <div id="sidebar">
            <h1>React Router Contacts</h1>
            <div>
            <Form id="search-Form" role="search">
                <input
                id="q"
                className={searching ? "loading" : ""}
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                value={query}
                onChange={(event) => {
                    submit(event.currentTarget.form);
                  }}
                />
                <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
                />
                <div
                className="sr-only"
                aria-live="polite"
                ></div>
            </Form>
            <Form method="post">
                <button type="submit">New</button>
            </Form>
            </div>
            <nav>
              {contacts.length ? (
                <ul>
                  {contacts.map((contact) => (
                    <li key={contact.id}>
                        <NavLink
                            to={`contacts/${contact.id}`}
                            className={({ isActive, isPending }) =>
                            isActive ? "active" : isPending ? "pending" : ""
                            }
                        >
                        {contact.type || contact.name ? (
                          <>
                            {contact.type} - {contact.name}
                          </>
                        ) : (
                          <i>No Name</i>
                        )}{" "}
                        {contact.numberPeople && <span>★</span>}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>
                  <i>No contacts</i>
                </p>
              )}
            </nav>
          </div>
          <div id="detail" className={
          navigation.state === "loading" ? "loading" : ""
        }>
            <Outlet/>
        </div>
        </>
      );
    }