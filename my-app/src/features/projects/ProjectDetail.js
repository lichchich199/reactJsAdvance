import { Form, useParams } from "react-router-dom";

import { useDispatch, useSelector} from 'react-redux'
import { getContact } from "./api";
import Loading from '../../components/commons/Loading'
import { useEffect } from "react";
import { getContactAsync } from "./slices";
import Popup from 'reactjs-popup';
import Modal from "../../components/commons/Modal";
import useGetLocation from "../../hooks/useGetLocation";

export async function loader({ params }) {
  const contact = await getContact(params);
  return { contact };
}
const basePath = "https://fastly-production.24c.in/webin/360";
export default function ProjectDetail() {
  const dispatch = useDispatch()
  const {loadingStatus} = useSelector(state => state.global);

  const { projectId } = useParams()
  const {project} = useSelector(state => state.project);
  
  useEffect(() => {
    dispatch(getContactAsync({projectId: projectId}))
  }, [projectId])

  var location = useGetLocation();
  console.log('location', location)

  return (
    <>
      {loadingStatus ? <Loading /> : 
      <div id="project">
        <div>
          <img
            key={project.image}
            src={project.image || null}
            alt=""
          />
        </div>
        <Popup modal trigger={<button>View to 360</button>}>
            {close => <Modal close={close} imagePath={basePath}/>}
        </Popup>

        <div>
          <h1>
            {project.type || project.name ? (
              <>
                {project.type} {project.name}
              </>
            ) : (
              <i>No Name</i>
            )}{" "}
            <Favorite project={project} />
          </h1>

          {project.numberPeople && <p>Number People: {project.numberPeople}</p>}
          {project.postalCode && <p>Postal Code: {project.postalCode}</p>}

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
      }
    </>
  );
}

function Favorite({ project }) {
  // yes, this is a `let` for later
  let favorite = project.favorite;
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