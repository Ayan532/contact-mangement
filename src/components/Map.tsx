
import 'leaflet/dist/leaflet.css';
import { useQuery } from "@tanstack/react-query";
import { MapContainer, TileLayer ,Marker,Popup} from "react-leaflet";
import {useState} from 'react'
import { Country } from "../types";
interface CountryData{
 Country:Country
}

const Map = () => {
  const [countriesData, setCountriesData] = useState<Country[]>([]);
    const { data} = useQuery<CountryData[]>(['countryData'], async () => {
        const response = await fetch('https://disease.sh/v3/covid-19/countries');
        const data = await response.json();
        setCountriesData(data);
        return data;
    })

 
  return (

         <MapContainer 
         className="m-auto w-full  border-blue-700"
          bounds={[[-60, -180], [85, 180]]} zoom={2}
          center={[20, 40]}
          scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
    {countriesData?.map((country) => (
            <Marker
              
              key={country.countryInfo._id}
              position={[country.countryInfo.lat, country.countryInfo.long]}
            >
              <Popup>
                <div>
                  <h2>{country.country}</h2>
                  <p>
                    Active Cases: {country.active} <br />
                    Recovered Cases: {country.recovered} <br />
                    Deaths: {country.deaths}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        
    
  </MapContainer>
  
  )
}

export default Map;