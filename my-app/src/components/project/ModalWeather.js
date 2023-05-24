// modal weather infomation
export default function ModalWeather({ data }) {
  return (
      <div className="content">
        { data.cod === '400' ? <p>Can not find weather with this location</p> : (<>
            <p>Name: {data?.name}</p>
            <p>Clouds: {data?.clouds?.all}</p>
            <p>Cod: {data?.cod}</p>
            <p>Coord: - lon: {data?.coord?.lon} - lat: {data?.coord?.lat}</p>
            <p>Weather: {data.weather && data?.weather[0]?.main}, {data.weather && data?.weather[0]?.description}</p>
            <p>Wind: speed-{data?.wind?.speed}, deg-{data?.wind?.deg}</p>
        </>
            )
        }
      </div>
  );
}