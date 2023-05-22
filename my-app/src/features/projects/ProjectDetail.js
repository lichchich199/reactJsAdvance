import { Form, useParams } from "react-router-dom";

import { useDispatch, useSelector} from 'react-redux'
import { getContact, getLocation, getWeather } from "./api";
import Loading from '../../components/commons/loading/Loading'
import { useEffect, useState } from "react";
import { getContactAsync } from "./slices";
import Popup from 'reactjs-popup';
import ModalThreeSixty from "../../components/project/ModalThreeSixty";
import ModalWeather from "../../components/project/ModalWeather";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export async function loader({ params }) {
  const contact = await getContact(params);
  return { contact };
}
const  basePath = "https://fastly-production.24c.in/webin/360";

export default function ProjectDetail() {
  const dispatch = useDispatch()

  const {loadingStatus} = useSelector(state => state.global);
  const {project} = useSelector(state => state.project);
  const [weather, setWeather] = useState({});
  const { projectId } = useParams()
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    dispatch(getContactAsync({projectId: projectId}))
  }, [projectId])

  useEffect(() => {
    var location = async () => {
      var res = await getLocation('04000');
      var result = JSON.parse(res);
      var dataLocation = result[0];
      var weatherByLatLon = await getWeather(dataLocation.lat, dataLocation.lon)
      setWeather(weatherByLatLon)
    }
    location()
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
            {close => <ModalThreeSixty close={close} imagePath={basePath}/>}
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
          </h1>

          {project.numberPeople && <p>Number People: {project.numberPeople}</p>}
          {project.postalCode && <span>Postal Code: {project.postalCode}</span>} 
          {project.postalCode && <Popup modal trigger={<button>View to 360</button>}>
            {close => <ModalWeather close={close} data={weather}/>}
        </Popup>} 

          <div>
            <Form action="edit">
              <button type="submit">Edit</button>
            </Form>
            <Form
              method="post"
              action="delete"
            >
              <button type="submit">Delete</button>
            </Form>
          </div>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          

        </div>
      </div>
      }
    </>
  );
}
