import { useState } from "react";
import { Form } from "react-router-dom";

//content.js
export default function FormSearch(props) {
    const [name, setName] = useState(props.value);

    return (
        <div>
        <Form id="search-Form" role="search">
            <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search By Name"
            type="search"
            name="q"
            value={name}
            onChange={(event) => {
                setName(event.currentTarget.value);
            }}
            />
        </Form>
        <Form action="projects/add">
            <button type="submit">New</button>
        </Form>
    </div>
    );
  }