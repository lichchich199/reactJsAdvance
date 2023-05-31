import React from 'react'
import { useSelector} from 'react-redux'
import LoadingSpinner from './components/commons/loading/Loading';

export default function Routing(props) {
  // handle Router wrap with loading
    const {loadingStatus} = useSelector(state => state.global);
  return (
    <>
        {loadingStatus && <LoadingSpinner />}
        <div className=' wrapLayout'>
            {props.children}
        </div>
    </>
  )
}
