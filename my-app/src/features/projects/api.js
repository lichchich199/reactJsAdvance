export const getContact = async (params) => {
    if(!params || !params.projectId) {
        return {}
    }
    return  await fetch('http://localhost:3000/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: parseInt(params.projectId) || -1,
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
    var body = {
        "mode": "ADD",
        "type": params.type,
        "name": params.name,
        "numberPeople":  parseInt(params.numberPeople),
        "postalCode": parseInt(params.postalCode),
        "image": params.image,
        "start_date": params.startDate,
    }
    const response = await fetch('http://localhost:3000/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).then(res => res.json())
    return  response
}

export const updateContact = async (params) => {
    var body = {
        "mode": "EDIT",
        "id": parseInt(params.id),
        "type": params.type,
        "name": params.name,
        "numberPeople":  parseInt(params.numberPeople),
        "postalCode": parseInt(params.postalCode),
        "image": params.image,
        "start_date": params.startDate,
    }
    console.log(body)
    const response = await fetch('http://localhost:3000/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
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
