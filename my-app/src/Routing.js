import React from 'react'
import { useSelector} from 'react-redux'
import LoadingSpinner from './components/commons/loading/Loading';

export default function Test(props) {
    const {loadingStatus} = useSelector(state => state.global);
  return (
    <>
        {loadingStatus && <LoadingSpinner />}
        <div className={(loadingStatus ? 'loading' : '') + ' wrapLayout'}>
            {props.children}
        </div>
    </>
  )
}
