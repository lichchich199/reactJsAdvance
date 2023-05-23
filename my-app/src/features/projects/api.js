export const getProject = async (params) => {
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

export const getProjects = async (name) => {
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

export const createProject = async (params) => {
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

export const updateProject = async (params) => {
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

export const deleteProject = async (id) => {
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

export const getLocation = async (postalCode) => {
    const response = await fetch('http://localhost:3000/api/location', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "postalCode": postalCode
        })
    }).then(res => res.json())
    return  response
}

export const getWeather = async (lat, lon) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8d2de98e089f1c28e1a22fc19a24ef04`).then(res => res.json())
    return  response
}