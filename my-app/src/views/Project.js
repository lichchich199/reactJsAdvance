import { useEffect, useState } from "react";
import { faList, faTable } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Outlet, useLoaderData, NavLink, Form, useNavigation, useSubmit, useNavigate } from "react-router-dom";

import { getContacts, createContact } from "../features/projects/api";

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

export default function Project() {
    const { contacts, q} = useLoaderData();
    const [query, setQuery] = useState(q);
    const [listStatus, setListStatus] = useState(true);
    const [selectedRow, setSelectedRow] = useState(-1);
    const navigation = useNavigation();

    const navigate = useNavigate()
    useEffect(() => {
        setQuery(q);
      }, [q]);
    const submit = useSubmit();
    const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

    function handleRowClick(id) {
        setSelectedRow(id)
      return navigate(`projects/${id}`);
    }

    function handleList(value) {
        if(value !== listStatus) {
            setListStatus(value)
        }
    }

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
                <Form action="projects/add">
                    <button type="submit">New</button>
                </Form>
                </div>
                <div>
                    <div className="text-primary font-weight-bold"><h1>List Project</h1></div>
                    <div style={{display: 'flex', marginLeft: 'auto'}}>
                        <div style={{margin: '0 10px', color:'#ccc', cursor:'pointer'}} onClick={() => {handleList(true)}}>
                            <FontAwesomeIcon icon={faList}/>    
                        </div>
                        <div style={{ cursor:'pointer'}} onClick={() => {handleList(false)}}>
                            <FontAwesomeIcon icon={faTable}/>
                        </div>
                    </div>
                </div>
                { listStatus ?
                    <nav>
                        {contacts.length ? (
                            <ul>
                                <li  className="text-primary">
                                    Name
                                    <span style={{float: 'right',color: '#eeb004'}}>Start date</span>
                                </li>
                            {contacts.map((contact) => (
                                <li key={contact.id} onClick={()=> {handleRowClick(contact.id)}}>
                                    <NavLink to={`projects/${contact.id}`} className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""} >
                                        {contact.name ? (<> {contact.name} </>) : (<i>No Name</i>)}{" "}
                                        {contact.start_date && <span>{contact.start_date}</span>}
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
                :
                    <table class="table table-sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Number People</th>
                                <th>Start Date</th>
                            </tr>
                        </thead>
                        <tbody>
                        {contacts.map((contact, index) => (
                            <tr key={contact.id} onClick={()=> {handleRowClick(contact.id)}} className={selectedRow===contact.id ? 'active' : ''}>
                                <td>{++index}</td>
                                <td>{contact.name}</td>
                                <td>{contact.type}</td>
                                <td>{contact.numberPeople}</td>
                                <td>{contact.start_date}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                }
          </div>
          <div id="detail" className={
          navigation.state === "loading" ? "loading" : ""
        }>
            <Outlet/>
        </div>
        </>
      );
    }