import { useEffect, useState } from "react";
import { useCookies } from 'react-cookie'
import { useDispatch, useSelector} from 'react-redux'
import { Form, NavLink, useNavigate, useSearchParams, useSubmit } from "react-router-dom";
import { faList, faTable } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { getProjectsAsync } from "./slices";

export default function ProjectList() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [listStatus, setListStatus] = useState(true);
    const [selectedRow, setSelectedRow] = useState(-1);
    const [searchParams, setSearchParams] = useSearchParams();
    const {projects, statusAction} = useSelector(state => state.project);
    // get search param from url & cookie
    var q = searchParams.get("q") 
    const [cookies, setCookie, removeCookie] = useCookies(['q']);
    var qSession = cookies.q;
    const [nameSearch, setNameSearch] = useState(q || qSession) 

    // handle set param search to cookie
    useEffect(() => {
        if((q !== null && !qSession) ||( q !== null && qSession && qSession !== q)) {
            setCookie("q", q)
            setNameSearch(q)
        }
    }, [q])

    // dispatch get list project with search condition
    useEffect(() => {
        dispatch(getProjectsAsync(nameSearch))
    }, [q, statusAction, nameSearch])

    // handle click row to redirect to detail project
    function handleRowClick(id) {
        setSelectedRow(id)
      return navigate(`projects/${id}`);
    }

    // handle to change type of view list (grid and list)
    function handleList(value) {
        if(value !== listStatus) {
            setListStatus(value)
        }
    }
    // submit search
    const submit = useSubmit();
    return (
        <>
            <div>
                <Form id="search-Form" role="search" action="/">
                    <input
                    id="q"
                    aria-label="Search contacts"
                    placeholder="Search By Name"
                    type="search"
                    name="q"
                    defaultValue={nameSearch}
                    onChange={(event) => {
                        submit(event.currentTarget.form);
                    }}
                    />
                </Form>
                <Form action="projects/add">
                    <button type="submit">New</button>
                </Form>
            </div>
            <div>
                <div className="text-primary font-weight-bold"><h1>List Project</h1></div>
                <div style={{display: 'flex', marginLeft: 'auto'}}>
                    <div style={{margin: '0 10px', cursor:'pointer'}} onClick={() => {handleList(true)}}>
                        <FontAwesomeIcon icon={faList}/>    
                    </div>
                    <div style={{ cursor:'pointer'}} onClick={() => {handleList(false)}}>
                        <FontAwesomeIcon icon={faTable}/>
                    </div>
                </div>
            </div>
            { listStatus ?
                <nav>
                    {projects.length ? (
                        <ul>
                            <li  className="text-primary">
                                Name
                                <span style={{float: 'right',color: '#eeb004'}}>Start date</span>
                            </li>
                        {projects.map((contact) => (
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
                        <i>No projects</i>
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
                    {projects.map((contact, index) => (
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
        </>
      );
    }