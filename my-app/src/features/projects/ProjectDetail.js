import Popup from 'reactjs-popup';
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from 'react-redux'
import { Form, useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import { getLocation, getWeather } from "./api";
import { changeStatusAction, deleteProjectAsync, getProjectAsync } from "./slices";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../components/commons/modal/Modal";
import ModalThreeSixty from "../../components/project/ModalThreeSixty";
import ModalWeather from "../../components/project/ModalWeather";
import { basePath } from '../../utils/constant';

export default function ProjectDetail() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const {project} = useSelector(state => state.project);
  const [weather, setWeather] = useState({});
  const { projectId } = useParams()
  const [show, setShow] = useState(false);

  const postalCode = project.postalCode || 0;

  // dispatch action get project when projectId change
  useEffect(() => {
    dispatch(getProjectAsync({projectId: projectId}))
  }, [projectId])

  // handle close modal
  const handleClose = () => setShow(false);
  // handle show modal
  const handleShow = (postalCode) => {
    setShow(true)
    var location = async () => {
      var res = await getLocation(postalCode);
      var result = JSON.parse(res);
      var dataLocation = {}
      if(result.length > 0) {
        dataLocation = result[0]
      }
      var weatherByLatLon = await getWeather(dataLocation?.lat, dataLocation?.lon)
      setWeather(weatherByLatLon)
    }
    location()
  };
  // handle delete project and dispatch action to handle loading
  const handleDelete = (projectId) => {
    dispatch(deleteProjectAsync(projectId))
    dispatch(changeStatusAction())
    navigate(`/`);
  }

  return (
    <>
      {
      <div id="project">
        <div>
          <img key={project.image} src={project.image || null} alt=""/>
        </div>
        <Popup modal trigger={<button>View to 360</button>}>
            {close => <ModalThreeSixty close={close} imagePath={basePath}/>}
        </Popup>
        <div>
          <h1>{project.type || project.name ? (<>{project.name}</>) : (<i>No Name</i>)}</h1>
          {
            project.numberPeople && <p>Number People: {project.numberPeople}</p>
          }
          {
            project.postalCode && <span>Postal Code: {project.postalCode}</span>
          } 
          {
            project.postalCode && <Button variant="primary" value={postalCode} onClick={(e)=> {handleShow(e.target.value)}}>View weather infomation</Button>
          }
          <div>
            <Form action="edit">
              <button type="submit">Edit</button>
            </Form>
              <button value={projectId} type="submit" onClick={(e) => {handleDelete(e.target.value)}}>Delete</button>
          </div>
          <Modal show={show}>
              <ModalHeader title='Weather infomation'/>
              <ModalBody>
                <ModalWeather data={weather}/>
              </ModalBody>
              <ModalFooter>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
              </ModalFooter>
          </Modal>
        </div>
      </div>
      }
    </>
  );
}