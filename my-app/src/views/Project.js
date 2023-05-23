import { useEffect, useState } from "react";
import { Outlet, useLoaderData, Form, useNavigation, useSubmit } from "react-router-dom";

import ProjectList from "../features/projects/ProjectList";

export default function Project() {
    const { q} = useLoaderData();
    const [query, setQuery] = useState(q);
    const navigation = useNavigation();

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
            <div>
                <Form id="search-Form" role="search">
                    <input
                    id="q"
                    className={searching ? "loading" : ""}
                    aria-label="Search contacts"
                    placeholder="Search By Name"
                    type="search"
                    name="q"
                    value={query}
                    onChange={(event) => {
                        submit(event.currentTarget.form);
                    }}
                    />
                </Form>
                <Form action="projects/add">
                    <button type="submit">New</button>
                </Form>
            </div>
            <ProjectList/>
          </div>
          <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
            <Outlet/>
        </div>
        </>
      );
    }