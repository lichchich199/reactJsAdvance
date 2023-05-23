import { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux'
import { faList, faTable } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { getProjects } from "./api";
import { getProjectsAsync } from "./slices";

export async function loader({request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getProjects(q);
    return { contacts, q };
  }

export default function ProjectList() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [listStatus, setListStatus] = useState(true);
    const [selectedRow, setSelectedRow] = useState(-1);
    const [searchParams, setSearchParams] = useSearchParams();
    const {projects, statusAction} = useSelector(state => state.project);

    var q = searchParams.get("q")

    useEffect(() => {
        dispatch(getProjectsAsync(q))
      }, [q, statusAction])
      
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