import { useState, useEffect } from "react";

const useGetLocation = () => {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/location')
        .then(results => results.json())
        .then(data => {
        setLocation(data)
    });
    }, [])
    return location
}
 export default useGetLocation