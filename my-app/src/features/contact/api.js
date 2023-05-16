// import axios from '../axios'

export const getContact = async (params) => {
    if(!params || !params.contactId) {
        return {}
    }
    return  await fetch('http://localhost:3000/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: parseInt(params.contactId) || -1,
          mode: 'GET'
        })
    }).then(res => res.json()).catch()
}

export const getContacts = async (name) => {
    const response = await fetch('http://localhost:3000/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'GETLIST',
          name:  name || ''
        })
    }).then(res => res.json())
    return  response
}

export const createContact = async (params) => {
    const response = await fetch('http://localhost:3000/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "mode": "ADD",
            "type": "Hải sản",
            "name": "Tôm Xú",
            "numberPeople": 10,
            "postalCode": 500012,
            "image": "https://placekitten.com/g/200/200",
            "start_date": "1970-01-01T00:00:00.000Z",
            "created_date": "1970-01-01T00:00:00.000Z"
        })
    }).then(res => res.json())
    return  response
}

export const updateContact = async (params) => {
    const response = await fetch('http://localhost:3000/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "mode": "EDIT",
            "id": 4,
            "type": "Nuôi Trồng",
            "name": "Thủy sản",
            "numberPeople": 13,
            "postalCode": 500013,
            "image": "https://placekitten.com/g/200/200",
            "start_date": "1970-02-01T00:00:00.000Z",
            "created_date": "1970-02-01T00:00:00.000Z"
        })
    }).then(res => res.json())
    return  response
}

export const deleteContact = async (id) => {
    const response = await fetch('http://localhost:3000/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "mode": "DELETE",
            "id": id
        })
    }).then(res => res.json())
    return  response
}
