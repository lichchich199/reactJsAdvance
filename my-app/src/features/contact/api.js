// import axios from '../axios'

export const getContact = async (params) => {
    if(!params || params.id) {
        return null
    }
    return  await fetch('http://localhost:3000/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: params.id,
          mode: 'GET'
        })
    }).then(res => res.json()).catch()
}

export const getContacts = async (params) => {
    const response = await fetch('http://localhost:3000/api/project', {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'GETLIST'
        })
    }).then(res => res.json())
    console.log(response)
    // const response = axios.post(`/api/order/bsj-change/backup`, params)
    return  {}
}