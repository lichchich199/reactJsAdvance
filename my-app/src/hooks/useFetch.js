import { useState, useEffect } from "react";

const useFetch = (url, init) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url, init).then(res => res.json()).then((data) => setData(data))
    }, [url, init])
    return [data]
}
 export default useFetch